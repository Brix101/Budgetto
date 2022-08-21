import { ExpensesResolver } from "./expenses.resolver";
import { FrequencyResolver } from "./frequency.resolver";
import { IncomeResolver } from "./income.resolver";

export default [ExpensesResolver, FrequencyResolver, IncomeResolver] as const;
