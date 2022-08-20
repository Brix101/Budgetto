import { Income } from "../../entity/income.entity";

export default {
  Query: {
    getAllIncome: async () => {
      return await Income.find();
    },
  },
};
