import { merge } from "lodash";
import expensesResolver from "./expenses.resolver";
import frequencyResolver from "./frequency.resolver";
import incomeResolver from "./income.resolver";

export default merge(expensesResolver, frequencyResolver, incomeResolver);
