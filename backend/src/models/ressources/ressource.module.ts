import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RessourceService } from './ressource.service';
import { Ressource } from './entities/ressource.entity';
import { Ship } from '../ships/entities/ship.entity';
import { ShipModule } from '../ships/ship.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ressource, Ship]), ShipModule],
  providers: [RessourceService],
  exports: [RessourceService],
})
export class RessourceModule {}
