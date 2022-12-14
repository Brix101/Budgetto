import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Ledger } from 'src/ledger/entities/ledger.entity';


export type UserDocument = HydratedDocument<User>;

@Schema({timestamps:true})
@ObjectType()
export class User {
  @Field(() => String) //<- GraphQL
  _id: MongooseSchema.Types.ObjectId; //<- TypeScript

  @Prop({ required: true, unique: true }) //<- Mongoose
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Ledger' }] })
  @Field(()=>[Ledger], { description: 'ledgers' })
  ledgers: Ledger[];
  
  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date

  
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

export const UserSchema = SchemaFactory.createForClass(User);


UserSchema.pre("save",async function(done) {
  let user = this as UserDocument

    if(user.isModified("password")){
      
      // Random additional data
    const salt = await bcrypt.genSalt(10);

    const hash = bcrypt.hashSync(user.password, salt);

    // Replace the password with the hash
    user.set("password",hash)
    }

  return done();
})

UserSchema.methods.comparePassword = async function (
  candidatePassword: string,
) {
  const user = this as UserDocument;

  return await bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};