import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UpdateExpenseInput } from './dto/update-expense.input';
import { Expense } from './entities/expense.entity';
import { ExpensesService } from './expenses.service';

@Resolver(() => Expense)
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Mutation(() => Expense)
  createExpense(@Args('createExpenseInput') createExpenseInput: CreateExpenseInput) {
    return this.expensesService.create(createExpenseInput);
  }

  @Query(() => [Expense], { name: 'expenses' })
  findAll() {
    return this.expensesService.findAll();
  }

  @Query(() => Expense, { name: 'expense' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.expensesService.findOne(id);
  }

  @Mutation(() => Expense)
  updateExpense(@Args('updateExpenseInput') updateExpenseInput: UpdateExpenseInput) {
    return this.expensesService.update(updateExpenseInput.id, updateExpenseInput);
  }

  @Mutation(() => Expense)
  removeExpense(@Args('id', { type: () => String }) id: string) {
    return this.expensesService.remove(id);
  }
}
