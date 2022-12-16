import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';


@InputType()
export class CreateFrequencyInput {
  
  @MinLength(4)
  @Field()
  name: string;

  @Field(()=>String, { nullable:true, description:"Frequency description" })
  description?: string;

}
