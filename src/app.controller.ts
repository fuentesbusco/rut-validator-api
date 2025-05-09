import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHello() {
    return this.appService.getHealth();
  }

  @Get()
  getWelcome() {
    return this.appService.getWelcome();
  }
}
