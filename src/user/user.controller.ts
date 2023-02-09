import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return 'This endpoint will return all users';
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return 'This endpoint will return user ' + id;
  }

  //   @Get('forbiden')
  //   getForbiden() {
  //     throw new HttpException('Error catch', HttpStatus.FORBIDDEN);
  //   }
}
