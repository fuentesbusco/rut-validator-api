import { Injectable } from '@nestjs/common';
import { validateRut } from './utils/rut-utils';

@Injectable()
export class RutService {
  validate(rut: string): boolean {
    return validateRut(rut);
  }
}
