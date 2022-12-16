import { Test, TestingModule } from '@nestjs/testing';
import { BudgetsResolver } from './budget.resolver';
import { BudgetsService } from './budget.service';

describe('BudgetResolver', () => {
  let resolver: BudgetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetsResolver, BudgetsService],
    }).compile();

    resolver = module.get<BudgetsResolver>(BudgetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
