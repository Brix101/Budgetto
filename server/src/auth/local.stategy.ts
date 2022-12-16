import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(loginUserInput: LoginUserInput): Promise<User> {
    const user = await this.authService.validateUser(loginUserInput);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
