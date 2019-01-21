import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { googleClientId, googleClientSecret, backendUrl } from 'src/constants';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: googleClientId, // <- Replace this with your client id
      clientSecret: googleClientSecret, // <- Replace this with your client secret
      callbackURL: `${backendUrl}/auth/google/callback`,
      passReqToCallback: true,
      scope: ['email'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: (err: any, user: any) => void,
  ) {
    try {

      const jwt: string = await this.authService.validateOAuthLogin(
        profile.id,
        Provider.GOOGLE,
      );
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
