import { Arg, Mutation, Query } from "type-graphql";
import { Frequency } from "../entity";
import { CreateFrequencyInput } from "../entity/frequency.entity";

export class FrequencyResolver {
  @Query(() => [Frequency])
  getAllFrequency() {
    return Frequency.find();
  }

  @Mutation(() => Frequency)
  async createFrequency(
    @Arg("input") input: CreateFrequencyInput
    // @Ctx() context: Context
  ) {
    const frequency = new Frequency();
    frequency.name = input.name;
    frequency.description = input.description;

    return await frequency.save();
  }
}
