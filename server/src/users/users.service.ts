import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { EntityManager } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(private entityManager: EntityManager) {}

  async create(user: UserDto) {
    await this.entityManager.save(user);
  }

  findAll(): Promise<User[]> {
    return this.entityManager.find(User);
  }
}
