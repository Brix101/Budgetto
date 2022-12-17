import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email:string, password:string): Promise<any> {
    const user = await this.authService.validateUser(email);
    if (!user) throw new NotFoundException("User not Found");
    
    if (!(await user.comparePassword(password))) {
      throw new BadRequestException("Wrong password or email. Please try another.");
    }

    return user;
  }
}
