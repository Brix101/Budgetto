import { Test, TestingModule } from '@nestjs/testing';
import { IncomeResolver } from './income.resolver';
import { IncomeService } from './income.service';

describe('IncomeResolver', () => {
  let resolver: IncomeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomeResolver, IncomeService],
    }).compile();

    resolver = module.get<IncomeResolver>(IncomeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
