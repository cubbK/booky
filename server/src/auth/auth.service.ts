import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign, decode, verify } from 'jsonwebtoken';
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

      if (!user) {
        user = await this.usersService.registerOAuthUser(
          thirdPartyId,
          provider,
        );
      }

      console.log('user', user);

      const payload = {
        // id: user.id,
        thirdPartyId,
        provider,
        id: user.id,
        roles: ['USER'],
      };

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn: 604800, // 7 days
      });
      return jwt;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

  async refreshJwt(jwt: string) {
    try {
      const payload: any = verify(jwt, this.JWT_SECRET_KEY);

      const { exp, iat, ...cleanPayload } = payload;
      const newJwt = sign(cleanPayload, this.JWT_SECRET_KEY, {
        expiresIn: 604800, // 7 days
      });
      return newJwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }
}
