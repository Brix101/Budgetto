import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateIncomeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
