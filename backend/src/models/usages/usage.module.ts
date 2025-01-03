import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsageService } from './usage.service';
import { Usage } from './entities/usage.entity';
import { Ressource } from '../ressources/entities/ressource.entity';
import { RessourceModule } from '../ressources/ressource.module';
import { UsageController } from './usage.controller';
import { Ship } from '../ships/entities/ship.entity';
import { ShipModule } from '../ships/ship.module';
import { UserModule } from '../users/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usage, Ressource, Ship]),
    RessourceModule,
    ShipModule,
    UserModule,
  ],
  providers: [UsageService],
  controllers: [UsageController],
  exports: [UsageService],
})
export class UsageModule {}
