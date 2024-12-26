import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipService } from './ship.service';
import { Ship } from './entities/ship.entity';
import { User } from '../users/entities/user.entity';
import { UserModule } from '../users/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ship, User]), UserModule],
  providers: [ShipService],
  exports: [ShipService],
})
export class ShipModule {}
