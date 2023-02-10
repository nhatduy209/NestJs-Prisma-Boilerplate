import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesBase } from 'src/auth/roles.constant';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserDTO } from 'src/dto/User.dto';
import { UserService } from './user.service';

@Controller('user')
@Roles(RolesBase.Member)
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getMe')
  getUser(@Req() req) {
    return {
      role: req.user.role,
      email: req.user.email,
    };
  }

  @Post('update-profile')
  updateProfile(@Body() userDto: UserDTO, @Req() req) {
    return this.userService.updateProfile(userDto, req.user.id);
  }
}
