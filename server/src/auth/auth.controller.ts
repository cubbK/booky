import { Controller, Get, UseGuards, Res, Req, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { frontendUrl } from 'src/constants';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() res) {
    // handles the Google OAuth2 callback
    const jwt: string = req.user.jwt;
    console.log(jwt);
    if (jwt) res.redirect(`${frontendUrl}/login/succes/` + jwt);
    else res.redirect(`${frontendUrl}/login/failure`);
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedResource() {
    return 'JWT is working!';
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('refresh/:jwt')
  refreshJwt(@Param('jwt') jwt: string) {
    const newJwt = this.authService.refreshJwt(jwt);
    return newJwt;
  }
}
