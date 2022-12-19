import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLedgerInput } from './dto/create-ledger.input';
import { UpdateLedgerInput } from './dto/update-ledger.input';
import { Ledger } from './entities/ledger.entity';
import { LedgerService } from './ledger.service';

@Resolver(() => Ledger)
export class LedgerResolver {
  constructor(private readonly ledgerService: LedgerService) {}

  @Mutation(() => Ledger)
  createLedger(@Args('createLedgerInput') createLedgerInput: CreateLedgerInput) {
    return this.ledgerService.create(createLedgerInput);
  }

  @Query(() => [Ledger], { name: 'ledgers' })
  findAll() {
    return this.ledgerService.findAll();
  }

  @Query(() => Ledger, { name: 'ledger' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.ledgerService.findOne(id);
  }

  @Mutation(() => Ledger)
  updateLedger(@Args('updateLedgerInput') updateLedgerInput: UpdateLedgerInput) {
    return this.ledgerService.update(updateLedgerInput.id, updateLedgerInput);
  }

  @Mutation(() => Ledger)
  removeLedger(@Args('id', { type: () => String }) id: string) {
    return this.ledgerService.remove(id);
  }
}
