import { Module } from '@nestjs/common';
import { RutModule } from './rut/rut.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
