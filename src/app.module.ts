import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [UserModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
