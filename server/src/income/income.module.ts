import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeResolver } from './income.resolver';

@Module({
  providers: [IncomeResolver, IncomeService]
})
export class IncomeModule {}
