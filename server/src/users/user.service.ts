import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ledger } from 'src/ledger/entities/ledger.entity';
import { LedgerService } from 'src/ledger/ledger.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private readonly ledgerService: LedgerService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userModel.create(createUserInput);
  }

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async findByEmail({ email }: { email: string }): Promise<any> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async getUserLedger(user:User):Promise<Ledger[]>{
    return this.ledgerService.findAll(user)
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
