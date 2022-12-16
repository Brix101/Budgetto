import { Test, TestingModule } from '@nestjs/testing';
import { FrequenciesResolver } from './frequency.resolver';
import { FrequenciesService } from './frequency.service';

describe('FrequencyResolver', () => {
  let resolver: FrequenciesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequenciesResolver, FrequenciesService],
    }).compile();

    resolver = module.get<FrequenciesResolver>(FrequenciesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
