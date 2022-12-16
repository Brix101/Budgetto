import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserInput: CreateUserInput):Promise<User> {
    return await this.userModel.create(createUserInput)
  }

  findAll() {
    return this.userModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string):Promise<boolean> {
    const user =await this.userModel.findOne({email})
    if(user){
      return false
    }
    return true
  }

  async login({ email, password }: LoginUserInput) {
    // Find our user
    const user = await this.userModel
      .findOne({ email })
      .select('-__v -confirmToken');

    // Check that user exists
    // Compare input password with the user's hashed password
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid email or password');
    }

    // Check that the user is active
    if (!user.active) {
      throw new Error('Please confirm your email address');
    }
    // Create a JWT
    // const jwt = signJwt(omit(user.toJSON(), ['password', 'active']));

    // // Set the JWT in a cookie
    // context.res.cookie('token', jwt, cookieOptions);

    // return the user
    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
