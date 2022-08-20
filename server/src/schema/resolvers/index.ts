import { merge } from "lodash";
import expensesResolver from "./expenses.resolver";
import incomeResolver from "./income.resolver";

export default merge(expensesResolver, incomeResolver);
