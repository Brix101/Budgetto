import { Arg, Mutation, Query } from "type-graphql";
import { Expenses } from "../entity";
import { CreateExpenseInput } from "../entity/expenses.entity";

export class ExpensesResolver {
  @Query(() => [Expenses])
  getAllExpenses() {
    return Expenses.find();
  }

  @Mutation(() => Expenses)
  async createExpenses(
    @Arg("input") input: CreateExpenseInput
    // @Ctx() context: Context
  ) {
    const expenses = new Expenses();
    expenses.name = input.name;
    expenses.amount = input.amount;
    expenses.category = input.category;
    expenses.note = input.note;
    // expenses.frequency = input.frequency;

    return await expenses.save();
  }
}
