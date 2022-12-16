import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetResolver } from './budget.resolver';

@Module({
  providers: [BudgetResolver, BudgetService]
})
export class BudgetModule {}
