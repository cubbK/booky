import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll() {
    return 'This action returns all users';
  }
}
