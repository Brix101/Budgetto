import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateLedgerInput } from './dto/create-ledger.input';
import { UpdateLedgerInput } from './dto/update-ledger.input';
import { Ledger } from './entities/ledger.entity';
import { LedgerService } from './ledger.service';

@Resolver(() => Ledger)
export class LedgerResolver {
  constructor(private readonly ledgerService: LedgerService) {}

  @Mutation(() => Ledger)
  @UseGuards(JwtAuthGuard)
  createLedger(@Args('createLedgerInput') createLedgerInput: CreateLedgerInput, @Context() context: any) {
    return this.ledgerService.create(createLedgerInput,context.req.user.id);
  }

  @Query(() => [Ledger], { name: 'ledgers' })
  @UseGuards(JwtAuthGuard)
  findAll(@Context() context: any) {
    return this.ledgerService.findAll(context.req.user.id);
  }

  @Query(() => Ledger, { name: 'ledger' })
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id', { type: () => String }) id: string, @Context() context: any) {
    return this.ledgerService.findOne(id,context.req.user.id);
  }

  @Mutation(() => Ledger)
  @UseGuards(JwtAuthGuard)
  updateLedger(@Args('updateLedgerInput') updateLedgerInput: UpdateLedgerInput, @Context() context: any) {
    return this.ledgerService.update(updateLedgerInput.id, updateLedgerInput,context.req.user.id);
  }

  @Mutation(() => Ledger)
  @UseGuards(JwtAuthGuard)
  removeLedger(@Args('id', { type: () => String }) id: string, @Context() context: any) {
    return this.ledgerService.remove(id,context.req.user.id);
  }
}
