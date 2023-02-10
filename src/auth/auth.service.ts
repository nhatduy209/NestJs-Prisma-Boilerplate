import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
  async signIn(authDto: AuthDto): Promise<any> {
    const user = this.prisma.user.findFirst({
      where: { email: authDto.email },
    });

    if ((await user).password == authDto.password) {
      return {
        access_token: this.jwtService.sign(await user),
        user: await user,
      };
    }
    return null;
  }

  async signUp(authDto: AuthDto) {
    const user = await this.prisma.user.create({
      data: {
        email: authDto.email,
        password: authDto.password,
        role: 'member',
      },
    });

    return { message: 'Signed up', user };
  }
}
