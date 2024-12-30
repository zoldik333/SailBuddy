import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipService } from './ship.service';
import { Ship } from './entities/ship.entity';
import { User } from '../users/entities/user.entity';
import { UserModule } from '../users/user.module';
import { ShipController } from './ship.controller';
import { Ressource } from '../ressources/entities/ressource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ship, User, Ressource]), UserModule],
  providers: [ShipService],
  controllers: [ShipController],
  exports: [ShipService],
})
export class ShipModule {}
