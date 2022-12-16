import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Frequency } from 'src/frequency/entities/frequency.entity';

export type CatDocument = HydratedDocument<Expense>;

export enum Category {
  ESSENTIAL = "essential",
  NON_ESSENTIAL = "non essential",
}

registerEnumType(Category, {
  name: "Category", // this one is mandatory
});

@Schema({timestamps:true})
@ObjectType()
export class Expense {
  @Field(() => String) //<- GraphQL
  _id: MongooseSchema.Types.ObjectId; //<- TypeScript

  @Prop()
  @Field(() => String, { nullable:false, description: 'Expense name' })
  name: string;

  @Prop()
  @Field(()=> Number, { defaultValue:0, description:"Amount by centavo" })
  amount: number;

  @Prop()
  @Field(()=>Category,{defaultValue:Category.NON_ESSENTIAL, description:"Expense category"})
  category!: Category;

  @Prop({type:MongooseSchema.Types.ObjectId, ref:"Frequency"})  
  @Field(() => Frequency) 
  frequency?: Frequency;

  @Prop()
  @Field(()=>String, { nullable:true, description:"Expense note" })
  note?: string;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);