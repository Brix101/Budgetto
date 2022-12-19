import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ledger, LedgerSchema } from './entities/ledger.entity';
import { LedgerResolver } from './ledger.resolver';
import { LedgerService } from './ledger.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ledger.name, schema: LedgerSchema },
    ]),
  ],
  providers: [LedgerResolver, LedgerService]
})
export class LedgerModule {}
