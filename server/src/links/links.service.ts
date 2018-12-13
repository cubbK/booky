import { Injectable } from '@nestjs/common';
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

    const link = new Link();
    link.url = data.url;
    link.user = user;
    link.group = getGroupNameFromLink(data.url);
    link.title = pageInfo.title;

    return await this.linkRepository.save(link);
  }

  async favoriteLink(toFavorite: boolean, linkId: number) {
    const link = await this.linkRepository.findOne(linkId);

    link.isFavorite = toFavorite;

    await this.linkRepository.save(link);
    return link;
  }

  async deleteLink(linkId: number) {
    await this.linkRepository.delete(linkId);
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
}
