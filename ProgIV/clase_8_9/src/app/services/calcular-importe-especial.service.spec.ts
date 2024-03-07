import { TestBed } from '@angular/core/testing';

import { CalcularImporteEspecialService } from './calcular-importe-especial.service';

describe('CalcularImporteEspecialService', () => {
  let service: CalcularImporteEspecialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularImporteEspecialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
