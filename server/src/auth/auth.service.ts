import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/user.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(private userSerive: UsersService) {}

  async validateUser({ email, password }: LoginUserInput) {
    const user = await this.userSerive.findOne(email);

    if (!user || !user.comparePassword(password)) {
      return null;
    }

    return user;
  }
}
