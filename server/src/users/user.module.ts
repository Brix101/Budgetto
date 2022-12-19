import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LedgerModule } from 'src/ledger/ledger.module';
import { User, UserSchema } from './entities/user.entity';
import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';
import { IsEmailUserAlreadyExistConstraint } from './user.validator';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    LedgerModule
  ],
  providers: [UsersResolver, UsersService, IsEmailUserAlreadyExistConstraint],
  exports: [UsersService],
})
export class UsersModule {}
