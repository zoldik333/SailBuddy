import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './config/orm.module';
import { ConfigsModule } from './config/config.module';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './models/users/user.module';
import { ShipModule } from './models/ships/ship.module';
import { RessourceModule } from './models/ressources/ressource.module';
import { CronService } from './cron.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigsModule,
    OrmModule,
    AuthModule,
    ScheduleModule.forRoot(),
    UserModule,
    ShipModule,
    RessourceModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, JwtService, CronService],
})
export class AppModule {}
