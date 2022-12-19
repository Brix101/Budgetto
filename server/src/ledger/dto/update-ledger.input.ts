import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateLedgerInput } from './create-ledger.input';

@InputType()
export class UpdateLedgerInput extends PartialType(CreateLedgerInput) {
  @Field(() => String)
  id: string;
}
