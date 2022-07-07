import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.register({
      name: 'vivi',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
