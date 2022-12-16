import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Frequency, FrequencySchema } from './entities/frequency.entity';
import { FrequencyResolver } from './frequency.resolver';
import { FrequencyService } from './frequency.service';

@Module({
  imports:[ MongooseModule.forFeature([{ name: Frequency.name, schema: FrequencySchema }])],
  providers: [FrequencyResolver, FrequencyService]
})
export class FrequencyModule {}
