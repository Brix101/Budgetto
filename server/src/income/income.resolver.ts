import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IncomeService } from './income.service';
import { Income } from './entities/income.entity';
import { CreateIncomeInput } from './dto/create-income.input';
import { UpdateIncomeInput } from './dto/update-income.input';

@Resolver(() => Income)
export class IncomeResolver {
  constructor(private readonly incomeService: IncomeService) {}

  @Mutation(() => Income)
  createIncome(@Args('createIncomeInput') createIncomeInput: CreateIncomeInput) {
    return this.incomeService.create(createIncomeInput);
  }

  @Query(() => [Income], { name: 'income' })
  findAll() {
    return this.incomeService.findAll();
  }

  @Query(() => Income, { name: 'income' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.incomeService.findOne(id);
  }

  @Mutation(() => Income)
  updateIncome(@Args('updateIncomeInput') updateIncomeInput: UpdateIncomeInput) {
    return this.incomeService.update(updateIncomeInput.id, updateIncomeInput);
  }

  @Mutation(() => Income)
  removeIncome(@Args('id', { type: () => Int }) id: number) {
    return this.incomeService.remove(id);
  }
}
