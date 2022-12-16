import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFrequencyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
