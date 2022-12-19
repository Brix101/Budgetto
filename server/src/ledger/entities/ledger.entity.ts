import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type LedgerDocument = HydratedDocument<Ledger>;

export enum Category {
  ESSENTIAL = "ESSENTIAL",
  NON_ESSENTIAL = "NON_ESSENTIAL",
}

export enum LedgerType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export enum Periodical {
  DAILY="DAILY",
  WEEKLY="WEEKLY",
  MONTHLY="MONTHLY",
  QUARTERLY="QUARTERLY",
  ANNUAL="ANNUAL"
}

registerEnumType(Category, {
  name: "Category", // this one is mandatory
});

registerEnumType(LedgerType, {
  name: "LedgerType", // this one is mandatory
});

registerEnumType(Periodical, {
  name: "Periodical", // this one is mandatory
});



@Schema({timestamps:true})
@ObjectType()
export class Ledger {
  @Field(() => String) //<- GraphQL
  _id: MongooseSchema.Types.ObjectId; //<- TypeScript

  @Prop()
  @Field(() => String, { nullable:false, description: 'Ledger name' })
  name: string;

  @Prop()
  @Field(()=> Number, { defaultValue:0, description:"Amount by centavo's" })
  amount: number;

  @Prop()
  @Field(()=>Category,{defaultValue:Category.NON_ESSENTIAL, description:"Ledger category"})
  category!: Category;

  @Prop()
  @Field(()=>LedgerType,{nullable:true, description:"Ledger Type"})
  ledgerType?: LedgerType;

  @Prop()
  @Field(()=>Periodical,{nullable:true, description:"Periodical Type"})
  periodical?: Periodical;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date
}

export const LedgerSchema = SchemaFactory.createForClass(Ledger);