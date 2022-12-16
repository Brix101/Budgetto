import { Injectable } from '@nestjs/common';
import { CreateIncomeInput } from './dto/create-income.input';
import { UpdateIncomeInput } from './dto/update-income.input';

@Injectable()
export class IncomesService {
  create(createIncomeInput: CreateIncomeInput) {
    return 'This action adds a new income';
  }

  findAll() {
    return `This action returns all income`;
  }

  findOne(id: string) {
    return `This action returns a #${id} income`;
  }

  update(id: string, updateIncomeInput: UpdateIncomeInput) {
    return `This action updates a #${id} income`;
  }

  remove(id: string) {
    return `This action removes a #${id} income`;
  }
}
