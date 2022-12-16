import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';


@InputType()
export class CreateFrequencyInput {
  
  @IsString()
  @MinLength(4)
  @Field()
  name: string;

  @Field(()=>String, { nullable:true, description:"Frequency description" })
  description?: string;

}
