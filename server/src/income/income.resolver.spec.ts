import { Test, TestingModule } from '@nestjs/testing';
import { IncomesResolver } from './income.resolver';
import { IncomesService } from './income.service';

describe('IncomeResolver', () => {
  let resolver: IncomesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomesResolver, IncomesService],
    }).compile();

    resolver = module.get<IncomesResolver>(IncomesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
