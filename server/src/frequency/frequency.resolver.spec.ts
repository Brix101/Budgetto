import { Test, TestingModule } from '@nestjs/testing';
import { FrequencyResolver } from './frequency.resolver';
import { FrequencyService } from './frequency.service';

describe('FrequencyResolver', () => {
  let resolver: FrequencyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequencyResolver, FrequencyService],
    }).compile();

    resolver = module.get<FrequencyResolver>(FrequencyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
