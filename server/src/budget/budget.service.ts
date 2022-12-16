import { Injectable } from '@nestjs/common';
import { CreateBudgetInput } from './dto/create-budget.input';
import { UpdateBudgetInput } from './dto/update-budget.input';

@Injectable()
export class BudgetService {
  create(createBudgetInput: CreateBudgetInput) {
    return 'This action adds a new budget';
  }

  findAll() {
    return `This action returns all budget`;
  }

  findOne(_id: string) {
    return `This action returns a #${_id} budget`;
  }

  update(_id: string, updateBudgetInput: UpdateBudgetInput) {
    return `This action updates a #${_id} budget`;
  }

  remove(_id: string) {
    return `This action removes a #${_id} budget`;
  }
}
