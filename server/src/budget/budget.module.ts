import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetsResolver } from './budget.resolver';
import { BudgetsService } from './budget.service';
import { Budget, BudgetSchema } from './entities/budget.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Budget.name, schema: BudgetSchema }]),
  ],
  providers: [BudgetsResolver, BudgetsService],
})
export class BudgetsModule {}
