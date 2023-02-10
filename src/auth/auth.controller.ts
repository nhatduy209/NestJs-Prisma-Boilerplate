import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthDto } from 'src/dto/Auth.dto';
import { AuthService } from './auth.service';
import { RolesGuard } from './roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  signIn(@Body() authDto: AuthDto) {
    return this.authService.signIn(authDto);
  }

  @Post('sign-up')
  signUp(@Body() authDto: AuthDto) {
    return this.authService.signUp(authDto);
  }
}
