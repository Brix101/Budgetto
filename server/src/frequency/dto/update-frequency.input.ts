import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateFrequencyInput } from './create-frequency.input';

@InputType()
export class UpdateFrequencyInput extends PartialType(CreateFrequencyInput) {
  @Field(() => String)
  _id: string;
}
