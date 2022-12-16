import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/user.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(private userSerive: UsersService) {}

  async validateUser({
    email,
    password,
  }: LoginUserInput): Promise<User | null> {
    const user = await this.userSerive.findOne(email);
    console.log(user);
    if (user && user.comparePassword(password)) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    return {
      accessToken: 'jwt',
      user,
    };
  }
}
