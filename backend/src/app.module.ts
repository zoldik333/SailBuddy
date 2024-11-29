import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './config/orm.module';
import { ConfigsModule } from './config/config.module';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigsModule, OrmModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, JwtService],
})
export class AppModule {}
