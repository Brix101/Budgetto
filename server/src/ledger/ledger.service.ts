import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { CreateLedgerInput } from './dto/create-ledger.input';
import { UpdateLedgerInput } from './dto/update-ledger.input';
import { Ledger, LedgerDocument } from './entities/ledger.entity';

@Injectable()
export class LedgerService {
  constructor(@InjectModel(Ledger.name) private ledgerModel:Model<LedgerDocument>){
  }

  async create(createLedgerInput: CreateLedgerInput, userId:string):Promise<Ledger> {
    const newLedger = new this.ledgerModel({...createLedgerInput,user:userId});
    return await newLedger.save();
  }

  findAll(user:User) {
    return this.ledgerModel.find({user:user}).exec();
  }

  findOne(id: string,userId:string) {
    return this.ledgerModel.findById(id);
  }

  async update(id: string, updateLedgerInput: UpdateLedgerInput, userId:string) {
    const updatedLedger = await this.ledgerModel.findByIdAndUpdate(id,
      {$set:{updateLedgerInput}},{new:true});

    return updatedLedger;
  }

  async remove(id: string, userId:string) {
    return this.ledgerModel.findByIdAndRemove(id);
  }
}
