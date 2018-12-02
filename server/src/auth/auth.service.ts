import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { jwtSecret } from 'src/constants';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';

export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  private readonly JWT_SECRET_KEY = jwtSecret; // <- replace this with your secret key

  constructor(private readonly usersService: UsersService) {}

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      let user: User = await this.usersService.findOneByThirdPartyId(
        thirdPartyId,
        provider,
      );
      console.log(user);

      if (!user)
        user = await this.usersService.registerOAuthUser(
          thirdPartyId,
          provider,
        );

      // await this.usersService.create({ google: 'googleId' });

      console.log(user);

      const payload = {
        thirdPartyId,
        provider,
      };

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn: 604800, // 7 days
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }
}
