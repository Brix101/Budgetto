import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userSerive: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string): Promise<User | null> {
    const user = await this.userSerive.findByEmail({ email: email });
    return user;
  }

  async generateToken(user: User, signOptions: JwtSignOptions = {}) {
    return {
      accessToken: this.jwtService.sign(
        { sub: user._id, email: user.email },
        signOptions,
      ),
    };
  }
}
