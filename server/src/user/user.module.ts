import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { IsEmailUserAlreadyExistConstraint } from './user.validator';

@Module({  
  imports: [MongooseModule.forFeature([{ name: User.name, schema : UserSchema }])],
  providers: [UserResolver, UserService, IsEmailUserAlreadyExistConstraint]
})
export class UserModule {}
