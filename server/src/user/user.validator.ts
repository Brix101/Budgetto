import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "./user.service";

@ValidatorConstraint({ name: 'isEmailUserAlreadyExist', async: true })
@Injectable()
export class IsEmailUserAlreadyExistConstraint
    implements ValidatorConstraintInterface
{
    constructor(protected readonly usersService: UserService) {}

    async validate(email: string) {
        return this.usersService.findByEmail(email)
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