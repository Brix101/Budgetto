import { Income } from "../../entity/income.entity";

export default {
  Query: {
    income: async () => {
      return await Income.find();
    },
  },
};
