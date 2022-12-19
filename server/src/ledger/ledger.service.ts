import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLedgerInput } from './dto/create-ledger.input';
import { UpdateLedgerInput } from './dto/update-ledger.input';
import { Ledger, LedgerDocument } from './entities/ledger.entity';

@Injectable()
export class LedgerService {
  constructor(@InjectModel(Ledger.name) private ledgerModel:Model<LedgerDocument>){
  }

  async create(createLedgerInput: CreateLedgerInput):Promise<Ledger> {
    const newLedger = new this.ledgerModel(createLedgerInput);
    return await newLedger.save();
  }

  findAll() {
    return this.ledgerModel.find().exec();
  }

  findOne(id: string) {
    return this.ledgerModel.findById(id);
  }

  async update(id: string, updateLedgerInput: UpdateLedgerInput) {
    const updatedLedger = await this.ledgerModel.findByIdAndUpdate(id,
      {$set:{updateLedgerInput}},{new:true});

    return updatedLedger;
  }

  async remove(id: string) {
    return this.ledgerModel.findByIdAndRemove(id);
  }
}
