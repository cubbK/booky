import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('links')
export class LinksController {
  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  addLink() {
    console.log('add link');
  }
}
