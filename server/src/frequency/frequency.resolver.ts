import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFrequencyInput } from './dto/create-frequency.input';
import { UpdateFrequencyInput } from './dto/update-frequency.input';
import { Frequency } from './entities/frequency.entity';
import { FrequencyService } from './frequency.service';

@Resolver(() => Frequency)
export class FrequencyResolver {
  constructor(private readonly frequencyService: FrequencyService) {}

  @Mutation(() => Frequency)
  createFrequency(@Args('createFrequencyInput') createFrequencyInput: CreateFrequencyInput) {
    return this.frequencyService.create(createFrequencyInput);
  }

  @Query(() => [Frequency], { name: 'frequencies' })
  findAll() {
    return this.frequencyService.findAll();
  }

  @Query(() => Frequency, { name: 'frequency' })
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.frequencyService.findOne(_id);
  }

  @Mutation(() => Frequency)
  updateFrequency(@Args('updateFrequencyInput') updateFrequencyInput: UpdateFrequencyInput) {
    return this.frequencyService.update(updateFrequencyInput._id, updateFrequencyInput);
  }

  @Mutation(() => Frequency)
  removeFrequency(@Args('_id', { type: () => String }) _id: string) {
    return this.frequencyService.remove(_id);
  }
}
