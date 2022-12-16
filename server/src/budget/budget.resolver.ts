import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BudgetService } from './budget.service';
import { Budget } from './entities/budget.entity';
import { CreateBudgetInput } from './dto/create-budget.input';
import { UpdateBudgetInput } from './dto/update-budget.input';

@Resolver(() => Budget)
export class BudgetResolver {
  constructor(private readonly budgetService: BudgetService) {}

  @Mutation(() => Budget)
  createBudget(@Args('createBudgetInput') createBudgetInput: CreateBudgetInput) {
    return this.budgetService.create(createBudgetInput);
  }

  @Query(() => [Budget], { name: 'budget' })
  findAll() {
    return this.budgetService.findAll();
  }

  @Query(() => Budget, { name: 'budget' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.budgetService.findOne(id);
  }

  @Mutation(() => Budget)
  updateBudget(@Args('updateBudgetInput') updateBudgetInput: UpdateBudgetInput) {
    return this.budgetService.update(updateBudgetInput.id, updateBudgetInput);
  }

  @Mutation(() => Budget)
  removeBudget(@Args('id', { type: () => Int }) id: number) {
    return this.budgetService.remove(id);
  }
}
