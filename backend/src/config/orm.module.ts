import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../models/users/entities/user.entity';
import { Ship } from '../models/ships/entities/ship.entity';
import { Ressource } from '../models/ressources/entities/ressource.entity';
import { Usage } from '../models/usages/entities/usage.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('db.host'),
        port: configService.get<number>('db.port'),
        username: configService.get<string>('db.username'),
        password: configService.get<string>('db.password'),
        database: configService.get<string>('db.database'),
        entities: [User, Ship, Ressource, Usage],
        synchronize: true,
      }),
    }),
  ],
})
export class OrmModule {}
