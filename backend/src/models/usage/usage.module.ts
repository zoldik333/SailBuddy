import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsageService } from './usage.service';
import { Usage } from './entities/usage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usage])],
  providers: [UsageService],
  exports: [UsageService],
})
export class UsageModule {}
