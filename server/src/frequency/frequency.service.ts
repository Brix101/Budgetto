import { Injectable } from '@nestjs/common';
import { CreateFrequencyInput } from './dto/create-frequency.input';
import { UpdateFrequencyInput } from './dto/update-frequency.input';

@Injectable()
export class FrequencyService {
  create(createFrequencyInput: CreateFrequencyInput) {
    return 'This action adds a new frequency';
  }

  findAll() {
    return `This action returns all frequency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} frequency`;
  }

  update(id: number, updateFrequencyInput: UpdateFrequencyInput) {
    return `This action updates a #${id} frequency`;
  }

  remove(id: number) {
    return `This action removes a #${id} frequency`;
  }
}
