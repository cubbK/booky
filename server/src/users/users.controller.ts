import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UsersController {
  @Get()
  findAll() {
    return 'This action returns all users';
  }
}
