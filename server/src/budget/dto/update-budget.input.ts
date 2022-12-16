import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateBudgetInput } from './create-budget.input';

@InputType()
export class UpdateBudgetInput extends PartialType(CreateBudgetInput) {
  @Field(() => String)
  id: string;
}
