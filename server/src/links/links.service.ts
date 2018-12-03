import { Injectable } from '@nestjs/common';
import { LinkDto } from './link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './link.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { getGroupNameFromLink } from './helpers/getGroupNameFromLink';

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

    const link = new Link();
    link.url = data.url;
    link.user = user;
    link.group = getGroupNameFromLink(data.url);

    return await this.linkRepository.save(link);
  }
}
