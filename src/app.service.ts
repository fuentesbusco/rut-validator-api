import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome() {
    return {
      name: 'Chilean RUT Validator API ',
      description:
        'A lightweight NestJS API to validate Chilean RUT numbers, designed for serverless deployment',
    };
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
