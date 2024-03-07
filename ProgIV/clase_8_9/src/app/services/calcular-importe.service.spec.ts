import { TestBed } from '@angular/core/testing';

import { CalcularImporteService } from './calcular-importe.service';

describe('CalcularImporteService', () => {
  let service: CalcularImporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularImporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
