import { Query } from "type-graphql";
import { Expenses } from "../entity";

export class ExpensesResolver {
  @Query(() => [Expenses])
  getAllExpenses() {
    return Expenses.find();
  }
}
