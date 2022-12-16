import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FrequencyService } from './frequency.service';
import { Frequency } from './entities/frequency.entity';
import { CreateFrequencyInput } from './dto/create-frequency.input';
import { UpdateFrequencyInput } from './dto/update-frequency.input';

@Resolver(() => Frequency)
export class FrequencyResolver {
  constructor(private readonly frequencyService: FrequencyService) {}

  @Mutation(() => Frequency)
  createFrequency(@Args('createFrequencyInput') createFrequencyInput: CreateFrequencyInput) {
    return this.frequencyService.create(createFrequencyInput);
  }

  @Query(() => [Frequency], { name: 'frequency' })
  findAll() {
    return this.frequencyService.findAll();
  }

  @Query(() => Frequency, { name: 'frequency' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.frequencyService.findOne(id);
  }

  @Mutation(() => Frequency)
  updateFrequency(@Args('updateFrequencyInput') updateFrequencyInput: UpdateFrequencyInput) {
    return this.frequencyService.update(updateFrequencyInput.id, updateFrequencyInput);
  }

  @Mutation(() => Frequency)
  removeFrequency(@Args('id', { type: () => Int }) id: number) {
    return this.frequencyService.remove(id);
  }
}
