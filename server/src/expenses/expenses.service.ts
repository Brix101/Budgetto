import { Injectable } from '@nestjs/common';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';

@Injectable()
export class ExpensesService {
  create(createExpenseInput: CreateExpenseInput) {
    return 'This action adds a new expense';
  }

  findAll() {
    return `This action returns all expenses`;
  }

  findOne(id: string) {
    return `This action returns a #${id} expense`;
  }

  update(id: string, updateExpenseInput: UpdateExpenseInput) {
    return `This action updates a #${id} expense`;
  }

  remove(id: string) {
    return `This action removes a #${id} expense`;
  }
}
