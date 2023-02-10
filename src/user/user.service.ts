import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async updateProfile(userDto: UserDTO, id: string) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { email: userDto.email },
    });

    return {
      user,
    };
  }
}
