import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesResolver } from './expenses.resolver';
import { ExpensesService } from './expenses.service';

describe('ExpensesResolver', () => {
  let resolver: ExpensesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpensesResolver, ExpensesService],
    }).compile();

    resolver = module.get<ExpensesResolver>(ExpensesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
