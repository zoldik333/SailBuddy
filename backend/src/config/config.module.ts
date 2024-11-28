import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import database_config from './database.config';
import baseConfig from './base.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [baseConfig, database_config],
      isGlobal: true,
    }),
  ],
})
export class ConfigsModule {}
