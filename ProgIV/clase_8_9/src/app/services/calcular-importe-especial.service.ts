import { Injectable } from '@angular/core';
import { CalcularImporteService } from './calcular-importe.service';

@Injectable()
export class CalcularImporteEspecialService implements CalcularImporteService {

  constructor() { }

  calcularImporte(precio: number): number {
    return precio * 1.20
  }
}
