import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RessourceService } from './ressource.service';
import { Ressource } from './entities/ressource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ressource])],
  providers: [RessourceService],
  exports: [RessourceService],
})
export class RessourceModule {}
