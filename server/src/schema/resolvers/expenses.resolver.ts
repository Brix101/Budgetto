import { Expenses } from "../../entity/expenses.entity";

export default {
  Query: {
    getAllExpenses: async () => {
      return await Expenses.find();
    },
  },
};
