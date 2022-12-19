import { Test, TestingModule } from '@nestjs/testing';
import { LedgerResolver } from './ledger.resolver';
import { LedgerService } from './ledger.service';

describe('LedgerResolver', () => {
  let resolver: LedgerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LedgerResolver, LedgerService],
    }).compile();

    resolver = module.get<LedgerResolver>(LedgerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
