import { Module } from '@nestjs/common';
import { IncomesResolver } from './income.resolver';
import { IncomesService } from './income.service';

@Module({
  providers: [IncomesResolver, IncomesService],
})
export class IncomesModule {}
