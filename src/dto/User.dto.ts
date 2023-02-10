import { IsEmail } from 'class-validator';

export class UserDTO {
  @IsEmail()
  email: string;
}
