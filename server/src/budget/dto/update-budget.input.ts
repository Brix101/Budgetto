import { CreateBudgetInput } from './create-budget.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBudgetInput extends PartialType(CreateBudgetInput) {
  @Field(() => Int)
  id: number;
}
