import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BudgetService } from './budget.service';
import { CreateBudgetInput } from './dto/create-budget.input';
import { UpdateBudgetInput } from './dto/update-budget.input';
import { Budget } from './entities/budget.entity';

@Resolver(() => Budget)
export class BudgetResolver {
  constructor(private readonly budgetService: BudgetService) {}

  @Mutation(() => Budget)
  createBudget(@Args('createBudgetInput') createBudgetInput: CreateBudgetInput) {
    return this.budgetService.create(createBudgetInput);
  }

  @Query(() => [Budget], { name: 'budgets' })
  findAll() {
    return this.budgetService.findAll();
  }

  @Query(() => Budget, { name: 'budget' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.budgetService.findOne(id);
  }

  @Mutation(() => Budget)
  updateBudget(@Args('updateBudgetInput') updateBudgetInput: UpdateBudgetInput) {
    return this.budgetService.update(updateBudgetInput.id, updateBudgetInput);
  }

  @Mutation(() => Budget)
  removeBudget(@Args('id', { type: () => String }) id: string) {
    return this.budgetService.remove(id);
  }
}
