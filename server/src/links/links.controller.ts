import { Controller, Post, UseGuards, Body, Req, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserIdFromJwt } from 'src/users/userIdFromJwt.decorator';
import { LinkDto } from './link.dto';
import { LinksService } from './links.service';
import { ToFavoriteDto } from './toFavorite.dto';
import { ACGuard, UseRoles } from 'nest-access-control';
import { User } from 'src/users/user.entity';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  async addLink(@UserIdFromJwt() userId, @Body() link: LinkDto) {
    return this.linksService.addLink(link, userId);
  }

  @Put('favorite')
  @UseGuards(AuthGuard('jwt'), ACGuard)
  @UseRoles({
		resource:  'link',
		action:  'update',
		possession:  'own',
	})
  async favoriteLink(@Body() payload: ToFavoriteDto) {

    return this.linksService.favoriteLink(payload.toFavorite, payload.linkId);
  }

}
