import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { config } from '../config';
import { environmentSchema } from '../environments/environment.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: true,
      load: [config],
      validationSchema: environmentSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
