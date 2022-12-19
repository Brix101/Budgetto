import { Field, InputType } from '@nestjs/graphql';
import { Category, LedgerType, Periodical } from '../entities/ledger.entity';

@InputType()
export class CreateLedgerInput {
  @Field(() => String, { nullable:false, description: 'Ledger name' })
  name: string;

  @Field(()=> Number, { defaultValue:0, description:"Amount by centavo" })
  amount: number;

  @Field(()=>Category,{description:"Ledger category"})
  category!: Category;

  @Field(()=>LedgerType,{nullable:true, description:"Ledger Type"})
  ledgerType?: LedgerType;

  @Field(()=>Periodical,{nullable:true, description:"Periodical Type"})
  periodical?: Periodical;

  @Field(()=>String, { nullable:true, description:"Ledger note" })
  note?: string;
}
