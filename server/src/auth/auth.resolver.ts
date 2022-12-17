import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authSerive: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => LoginResponse)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context: any,
  ) {
    return this.authSerive.generateToken(context.req.user);
  }
}
