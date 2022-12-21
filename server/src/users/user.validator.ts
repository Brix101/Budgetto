import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import { UsersService } from './user.service';

@ValidatorConstraint({ name: 'isEmailUserAlreadyExist', async: true })
@Injectable()
export class IsEmailUserAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(protected readonly usersService: UsersService) {}

  async validate(email: string) {
    const user = await this.usersService.findByEmail({email:email});

    if(user){
      return false;
    }
    
    return true;
  }
}

export function IsEmailUserAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUserAlreadyExistConstraint,
    });
  };
}
