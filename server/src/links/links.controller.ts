import {
  Controller,
  Post,
  UseGuards,
  Body,
  Req,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserIdFromJwt } from 'src/users/userIdFromJwt.decorator';
import { LinkDto } from './link.dto';
import { LinksService } from './links.service';
import { ToFavoriteDto } from './toFavorite.dto';
import { ACGuard, UseRoles } from 'nest-access-control';
import { User } from 'src/users/user.entity';
import { UserBelongsToResourceGuard } from 'src/UseBelongsToResource.guard';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  async addLink(@UserIdFromJwt() userId, @Body() link: LinkDto) {
    return this.linksService.addLink(link, userId);
  }

  @Put('favorite/:linkId/:toFavorite')
  @UseGuards(AuthGuard('jwt'), new UserBelongsToResourceGuard({
    itemIdName: 'linkId',
    type: 'Param',
    itemsFieldName: 'links',
  }))
  async favoriteLink(
    @Param('linkId') linkId: number,
    @Param('toFavorite') toFavorite: boolean,
  ) {
    return this.linksService.favoriteLink(toFavorite, linkId);
  }

  @Delete('delete/:linkId')
  @UseGuards(AuthGuard('jwt'))
  async deleteLink(@Param('linkId') linkId: number) {
    console.log('delete' + linkId);
  }
}
