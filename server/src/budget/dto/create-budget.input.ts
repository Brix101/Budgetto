import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBudgetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
