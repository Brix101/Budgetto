import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(protected readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService
        .get('JWT_PUBLIC_KEY')
        .split(String.raw`\n`)
        .join('\n'),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any): Promise<any> {
    const { sub: userId, email } = payload;
    return {
      id: userId,
      email,
      // roles,
    };
  }
}
