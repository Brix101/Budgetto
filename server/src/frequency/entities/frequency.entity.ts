import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';


export type FrequencyDocument = HydratedDocument<Frequency>;

@Schema({timestamps:true})
@ObjectType()
export class Frequency {
  @Field(() => String) //<- GraphQL
  _id: MongooseSchema.Types.ObjectId; //<- TypeScript

  @Prop()
  @Field(() => String, { description: 'Frequency name' })
  name: string;

  @Prop()
  @Field(()=>String, { nullable:true, description:"Frequency description" })
  description?: string;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date
}

export const FrequencySchema = SchemaFactory.createForClass(Frequency);