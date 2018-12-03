import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserIdFromJwt } from 'src/users/userIdFromJwt.decorator';
import { LinkDto } from './link.dto';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  async addLink(@UserIdFromJwt() userId, @Body() link: LinkDto) {
    return this.linksService.addLink(link, userId);
  }
}
