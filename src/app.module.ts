import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { ValidationModule } from './validation/validation.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    UserModule,
    ValidationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModul