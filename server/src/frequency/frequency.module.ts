import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Frequency, FrequencySchema } from './entities/frequency.entity';
import { FrequenciesResolver } from './frequency.resolver';
import { FrequenciesService } from './frequency.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Frequency.name, schema: FrequencySchema },
    ]),
  ],
  providers: [FrequenciesResolver, FrequenciesService],
})
export class FrequenciesModule {}
