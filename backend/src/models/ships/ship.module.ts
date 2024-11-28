import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipService } from './ship.service';
import { Ship } from './entities/ship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ship])],
  providers: [ShipService],
  exports: [ShipService],
})
export class ShipModule {}
