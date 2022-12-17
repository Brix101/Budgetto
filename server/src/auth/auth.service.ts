import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(private userSerive: UsersService,
    private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userSerive.findByEmail({email : email});
    if (user && user.comparePassword(password)) {
      return user;
    }

    return null;
  }

  async login(user:User) {
    if (user) {
      return {
        accessToken: this.jwtService.sign({sub:user._id, email:user.email})
      };
    }

    return  { accessToken:null,};
  }
}
