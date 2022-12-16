import { CreateFrequencyInput } from './create-frequency.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFrequencyInput extends PartialType(CreateFrequencyInput) {
  @Field(() => Int)
  id: number;
}
