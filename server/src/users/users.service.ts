import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userDto: UserDto) {
    await this.userRepository.save(userDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneByThirdPartyId(thirdPartyId: string, provider: string) {
    return this.userRepository.findOne({ [provider]: thirdPartyId });
  }

  async registerOAuthUser(
    thirdPartyId: string,
    provider: string,
  ): Promise<User> {
    const user = new User();
    user.google = thirdPartyId;

    return await this.userRepository.save(user);

  }
}
