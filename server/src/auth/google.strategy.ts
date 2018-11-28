import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { googleClientId, googleClientSecret } from 'src/constants';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: googleClientId, // <- Replace this with your client id
      clientSecret: googleClientSecret, // <- Replace this with your client secret
      callbackURL: 'http://localhost:4001/auth/google/callback',
      passReqToCallback: true,
      scope: ['profile'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: (...any) => void,
  ) {
    try {
      console.log(profile);

      const jwt: string = 'placeholderJWT';
      const user = {
        jwt,
      };

      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
