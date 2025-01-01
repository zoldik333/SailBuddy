import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RessourceService } from './ressource.service';
import { Ressource } from './entities/ressource.entity';
import { Ship } from '../ships/entities/ship.entity';
import { ShipModule } from '../ships/ship.module';
import { RessourceController } from './ressource.controller';
import { UserModule } from '../users/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ressource, Ship]),
    ShipModule,
    UserModule,
  ],
  providers: [RessourceService],
  controllers: [RessourceController],
  exports: [RessourceService],
})
export class RessourceModule {}
