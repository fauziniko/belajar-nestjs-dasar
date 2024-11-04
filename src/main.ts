import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('rahasia'));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
