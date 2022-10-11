/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: function description
 * @Date: 2022-09-30 16:47:54
 * @LastEditTime: 2022-10-11 19:51:46
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Shoppee move');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  // await app.listen(3000);
  await app.listen(9000, '0.0.0.0', () => {
      logger.log('Shoppee move Server started on: http://localhost:9000');
  });
}
bootstrap();
