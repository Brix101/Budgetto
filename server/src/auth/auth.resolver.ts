import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authSerive: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context: any,
  ) {
    const result = await this.authSerive.generateToken(context.req.user);
    context.res.cookie("refreshToken",result.accessToken,{
      maxAge: 1000 * 60 * 60 * 24, //expires in 24 hours
      httpOnly: true, // client can't get cookie by script
      secure: false, // only transfer over https
      sameSite: "strict", // set to true to only sent for requests to the same FQDN as the domain in the cookie
    })
    .setHeader("Authorization", result.accessToken);
    return  context.req.user
  }
}
