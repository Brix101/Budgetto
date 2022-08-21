import { Query } from "type-graphql";
import { Income } from "../entity";

export class IncomeResolver {
  @Query(() => [Income])
  getAllIncome() {
    return Income.find();
  }
}
