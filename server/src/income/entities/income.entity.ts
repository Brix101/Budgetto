import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Frequency } from 'src/frequency/entities/frequency.entity';


export type CatDocument = HydratedDocument<Income>;

@Schema({timestamps:true})
@ObjectType()
export class Income {
  @Field(() => String) //<- GraphQL
  _id: MongooseSchema.Types.ObjectId; //<- TypeScript

  @Prop()
  @Field(() => String, { description: 'Income name' })
  name: string;

  @Prop()
  @Field(()=> Number, { defaultValue:0, description:"Amount by centavo" })
  amount: number;
  
  @Prop({type:[{type: MongooseSchema.Types.ObjectId, ref:"Frequency"}]})  
  @Field(() => [Frequency]) 
  frequency?: Frequency[];

  @Prop()
  @Field(()=>String, { nullable:true, description:"Income note" })
  note?: string;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date
}

export const IncomeSchema = SchemaFactory.createForClass(Income);