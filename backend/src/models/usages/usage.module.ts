import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsageService } from './usage.service';
import { Usage } from './entities/usage.entity';
import { Ressource } from '../ressources/entities/ressource.entity';
import { RessourceModule } from '../ressources/ressource.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usage, Ressource]), RessourceModule],
  providers: [UsageService],
  exports: [UsageService],
})
export class UsageModule {}
