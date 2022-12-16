import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { BudgetResolver } from './budget.resolver';
import { BudgetService } from './budget.service';
import { Budget, BudgetSchema } from './entities/budget.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Budget.name, schema: BudgetSchema }])],
  providers: [BudgetResolver, BudgetService]
})
export class BudgetModule {}
