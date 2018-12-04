import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { Role } from './role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findOneByThirdPartyId(thirdPartyId: string, provider: string) {
    return this.userRepository.findOne({ [provider]: thirdPartyId });
  }

  async registerOAuthUser(
    thirdPartyId: string,
    provider: string,
  ): Promise<User> {
    let role: Role = await this.roleRepository.findOne({ role: 'USER' });
    if (!role) {
      role = new Role();
      role.role = 'USER';
      await this.roleRepository.save(role);
    }

    const user = new User();
    user.google = thirdPartyId;
    user.roles = [role];

    return await this.userRepository.save(user);
  }
}
