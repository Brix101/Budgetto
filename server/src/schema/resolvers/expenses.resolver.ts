import { Expenses } from "../../entity/expenses.entity";

export default {
  Query: {
    expenses: async () => {
      return await Expenses.find();
    },
  },
};
