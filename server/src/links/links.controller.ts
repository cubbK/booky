import { Controller, Post, UseGuards, Body, Req, Put, Delete, Param } from '@nestjs/common';
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
  @UseGuards(AuthGuard('jwt'), ACGuard)
  @UseRoles({
		resource:  'link',
		action:  'create',
		possession:  'own',
	})
  async addLink(@UserIdFromJwt() userId, @Body() link: LinkDto) {
    return this.linksService.addLink(link, userId);
  }

  @Put('favorite/:linkId/:toFavorite')
  @UseGuards(AuthGuard('jwt'), ACGuard)
  @UseRoles({
		resource:  'link',
		action:  'update',
		possession:  'own',
	})
  async favoriteLink(@Param('linkId') linkId: number, @Param('toFavorite') toFavorite: boolean) {

    return this.linksService.favoriteLink(toFavorite, linkId);
  }

  @Delete('delete/:linkId')
  @UseGuards(AuthGuard('jwt'), ACGuard)
  @UseRoles({
		resource:  'link',
		action:  'delete',
		possession:  'own',
  })
  async deleteLink(@Param('linkId') linkId: number) {
    console.log('delete' + linkId);
  }
}
