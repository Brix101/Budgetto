import { Frequency } from "../../entity/frequency.entity";

export default {
  Query: {
    getAllFrequency: async () => {
      return await Frequency.find();
    },
  },
};
