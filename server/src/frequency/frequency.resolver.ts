import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFrequencyInput } from './dto/create-frequency.input';
import { UpdateFrequencyInput } from './dto/update-frequency.input';
import { Frequency } from './entities/frequency.entity';
import { FrequenciesService } from './frequency.service';

@Resolver(() => Frequency)
export class FrequenciesResolver {
  constructor(private readonly frequencyService: FrequenciesService) {}

  @Mutation(() => Frequency)
  createFrequency(
    @Args('createFrequencyInput') createFrequencyInput: CreateFrequencyInput,
  ) {
    return this.frequencyService.create(createFrequencyInput);
  }

  @Query(() => [Frequency], { name: 'frequencies' })
  findAll() {
    return this.frequencyService.findAll();
  }

  @Query(() => Frequency, { name: 'frequency' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.frequencyService.findOne(id);
  }

  @Mutation(() => Frequency)
  updateFrequency(
    @Args('updateFrequencyInput') updateFrequencyInput: UpdateFrequencyInput,
  ) {
    return this.frequencyService.update(
      updateFrequencyInput.id,
      updateFrequencyInput,
    );
  }

  @Mutation(() => Frequency)
  removeFrequency(@Args('id', { type: () => String }) id: string) {
    return this.frequencyService.remove(id);
  }
}
