import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserIdFromJwt } from 'src/users/userIdFromJwt.decorator';

@Controller('links')
export class LinksController {
  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  addLink(@UserIdFromJwt() userId) {
    console.log(userId);
    console.log('add link');
  }
}
