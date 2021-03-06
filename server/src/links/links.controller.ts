import {
  Controller,
  Post,
  UseGuards,
  Body,
  Req,
  Put,
  Delete,
  Param,
  HttpException,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserIdFromJwt } from 'src/users/userIdFromJwt.decorator';
import { LinkDto } from './link.dto';
import { LinksService } from './links.service';
import { FavoriteDto } from './favorite.dto';
import { DeleteDto } from './delete.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getLinks(@UserIdFromJwt() userId) {
    return this.linksService.getLinks(userId);
  }

  @Get('/groups')
  @UseGuards(AuthGuard('jwt'))
  async getGroups(@UserIdFromJwt() userId) {
    return this.linksService.getGroups(userId);
  }

  @Get('/group/:groupName')
  @UseGuards(AuthGuard('jwt'))
  async getLinksByGroupName(
    @UserIdFromJwt() userId,
    @Param('groupName') groupName: string,
  ) {
    return this.linksService.getLinksByGroupName(userId, groupName);
  }

  @Get('/favorites')
  @UseGuards(AuthGuard('jwt'))
  async getFavorites(@UserIdFromJwt() userId) {
    return this.linksService.getFavorites(userId);
  }

  @Get('/favorites/count')
  @UseGuards(AuthGuard('jwt'))
  async getFavoriteLinksCount(@UserIdFromJwt() userId) {
    return this.linksService.getFavoriteLinksCount(userId);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async addLink(@UserIdFromJwt() userId, @Body() link: LinkDto) {
    console.log('add link');
    return this.linksService.addLink(link, userId);
  }

  @Put('favorite')
  @UseGuards(AuthGuard('jwt'))
  async favoriteLink(@Body() props: FavoriteDto, @Req() req) {
    const doesLinkBelongToUser: boolean = await this.linksService.doesLinkBelongToUser(
      props.linkId,
      req.user.id,
    );

    if (doesLinkBelongToUser) {
      return this.linksService.favoriteLink(props.toFavorite, props.linkId);
    } else {
      throw new HttpException(
        'Forbidden, this link does not belong to this user',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  async deleteLink(@Body() props: DeleteDto, @Req() req) {
    const doesLinkBelongToUser: boolean = await this.linksService.doesLinkBelongToUser(
      props.linkId,
      req.user.id,
    );

    if (doesLinkBelongToUser) {
      return this.linksService.deleteLink(props.linkId);
    } else {
      throw new HttpException(
        'Forbidden, this link does not belong to this user',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
