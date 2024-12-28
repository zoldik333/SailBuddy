import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../models/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt.guard';
import { User } from '../models/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ship } from '../models/ships/entities/ship.entity';
import { ShipModule } from '../models/ships/ship.module';
import { RessourceModule } from '../models/ressources/ressource.module';
import { UsageModule } from '../models/usages/usage.module';

@Module({
  imports: [
    UserModule,
    ShipModule,
    RessourceModule,
    UsageModule,
    PassportModule,
    TypeOrmModule.forFeature([User, Ship]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('app.secret'),
        signOptions: { expiresIn: '6m' },
        global: true,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useValue: JwtAuthGuard,
    },
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
