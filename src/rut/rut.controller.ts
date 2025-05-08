import { Controller, Get, Query } from '@nestjs/common';
import { RutService } from './rut.service';

@Controller('validate')
export class RutController {
  constructor(private readonly rutService: RutService) {}

  @Get()
  validate(@Query('rut') rut: string) {
    const isValid = this.rutService.validate(rut);
    return { rut, isValid };
  }
}
