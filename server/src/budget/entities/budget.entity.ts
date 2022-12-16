import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';


export type CatDocument = HydratedDocument<Budget>;

@Schema({timestamps:true})
@ObjectType()
export class Budget {
  @Field(() => String) //<- GraphQL
  _id: MongooseSchema.Types.ObjectId; //<- TypeScript

  @Prop()
  @Field(() => String, { description: 'Budget name' })
  name: string;

  @Prop()
  @Field(()=> Number, { defaultValue:0, description:"Amount by centavo" })
  amount: number;

  @Prop()
  @Field(()=>String, { nullable:true, description:"Budget note" })
  note?: string;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);