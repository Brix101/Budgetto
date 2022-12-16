import { Field, InputType } from '@nestjs/graphql';
import { IsEmailUserAlreadyExist } from '../user.validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @IsEmailUserAlreadyExist({
    message: 'Email already registered!',
  })
  @Field()
  email: string;

  @Field()
  password: string;
}
