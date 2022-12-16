import { Test, TestingModule } from '@nestjs/testing';
import { BudgetResolver } from './budget.resolver';
import { BudgetService } from './budget.service';

describe('BudgetResolver', () => {
  let resolver: BudgetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetResolver, BudgetService],
    }).compile();

    resolver = module.get<BudgetResolver>(BudgetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
