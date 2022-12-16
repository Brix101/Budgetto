import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateIncomeInput } from './dto/create-income.input';
import { UpdateIncomeInput } from './dto/update-income.input';
import { Income } from './entities/income.entity';
import { IncomesService } from './income.service';

@Resolver(() => Income)
export class IncomesResolver {
  constructor(private readonly incomeService: IncomesService) {}

  @Mutation(() => Income)
  createIncome(
    @Args('createIncomeInput') createIncomeInput: CreateIncomeInput,
  ) {
    return this.incomeService.create(createIncomeInput);
  }

  @Query(() => [Income], { name: 'incomes' })
  findAll() {
    return this.incomeService.findAll();
  }

  @Query(() => Income, { name: 'income' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.incomeService.findOne(id);
  }

  @Mutation(() => Income)
  updateIncome(
    @Args('updateIncomeInput') updateIncomeInput: UpdateIncomeInput,
  ) {
    return this.incomeService.update(updateIncomeInput.id, updateIncomeInput);
  }

  @Mutation(() => Income)
  removeIncome(@Args('id', { type: () => String }) id: string) {
    return this.incomeService.remove(id);
  }
}
