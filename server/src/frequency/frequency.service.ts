import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFrequencyInput } from './dto/create-frequency.input';
import { UpdateFrequencyInput } from './dto/update-frequency.input';
import { Frequency, FrequencyDocument } from './entities/frequency.entity';

@Injectable()
export class FrequencyService {
  constructor(@InjectModel(Frequency.name) private frequencyModel: Model<FrequencyDocument>){}

  create(createFrequencyInput: CreateFrequencyInput):Promise<Frequency> {
    const createdFrequency = new this.frequencyModel(createFrequencyInput)
    return createdFrequency.save()
  }

  findAll():Promise<Frequency[]> {
    return this.frequencyModel.find().exec()
  }

  findOne(_id: string) {
    return this.frequencyModel.findById(_id)
  }

  update(_id: string, updateFrequencyInput: UpdateFrequencyInput) {
    return this.frequencyModel.findByIdAndUpdate(_id,
      {$set:updateFrequencyInput},{new:true})
  }

  remove(_id: string) {
    return this.frequencyModel.findByIdAndRemove(_id)
  }
}
