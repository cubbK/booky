import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Post('/create')
  async create(@Body() userDto: UserDto) {
    this.usersService.create(userDto);
  }
}
