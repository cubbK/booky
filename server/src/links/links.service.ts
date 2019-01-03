import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LinkDto } from './link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './link.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { getGroupNameFromLink } from './helpers/getGroupNameFromLink';
import { getPageInfo } from './helpers/getPageInfo';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async addLink(data: LinkDto, userId: number) {
    const user = await this.usersRepository.findOne(userId);
    const pageInfo = await getPageInfo(data.url);

    const linkExists = await this.doesLinkExist(data.url, user);

    if (linkExists) {
      throw new HttpException('Duplicate link', HttpStatus.NOT_ACCEPTABLE);
    }

    const link = new Link();
    link.url = data.url;
    link.user = user;
    link.group = getGroupNameFromLink(data.url);
    link.title = pageInfo.title;

    return await this.linkRepository.save(link);
  }

  async doesLinkExist(url: string, user: User) {
    const links = await this.linkRepository.find({ user });
    for (const link of links) {
      if (link.url === url) {
        return true;
      }
    }
    return false;
  }

  async favoriteLink(toFavorite: boolean, linkId: number) {
    const link = await this.linkRepository.findOne(linkId);

    link.isFavorite = toFavorite;

    await this.linkRepository.save(link);
    return link;
  }

  async deleteLink(linkId: number) {
    await this.linkRepository.delete(linkId);
    return {
      linkId,
    };
  }

  async doesLinkBelongToUser(linkId: number, userId: number): Promise<boolean> {
    const user = await this.usersRepository.findOne(userId);
    const links = await this.linkRepository.find({ user });

    if (!user) {
      throw new Error('No such user');
    }

    return links.filter(link => link.id === linkId).length > 0;
  }

  async getLinks(userId: number) {
    const user = await this.usersRepository.findOne(userId);
    const links = await this.linkRepository.find({ user });
    return links;
  }

  async getGroups(userId: number) {
    const user = await this.usersRepository.findOne(userId);
    const links = await this.linkRepository.find({ user });

    const groups: Array<{ name: string; linksCount: number; id: number }> = [];

    // create Favorites group, with a known id of 0
    groups.push({
      id: 0,
      name: 'Favorites',
      linksCount: 0,
    });

    for (const link of links) {
      const categoryIndex = groups.findIndex(
        category => category.name === link.group,
      );

      if (link.isFavorite) {
        // groups[0] is always Favorites group
        groups[0].linksCount = groups[0].linksCount + 1;
      }

      if (categoryIndex === -1) {
        groups.push({
          id: groups.length,
          name: link.group,
          linksCount: 1,
        });
      } else if (categoryIndex !== 0 /* not equal to favorites tab */) {
        groups[categoryIndex].linksCount += 1;
      }
    }

    return groups;
  }

  async getLinksByGroupName(userId: number, groupName: string) {
    const user = await this.usersRepository.findOne(userId);
    const links = await this.linkRepository.find({ user, group: groupName });
    return links;
  }
}
