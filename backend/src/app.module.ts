import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './config/orm.module';
import { ConfigsModule } from './config/config.module';

@Module({
  imports: [ConfigsModule, OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
