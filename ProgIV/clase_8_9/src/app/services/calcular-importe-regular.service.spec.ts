import { TestBed } from '@angular/core/testing';

import { CalcularImporteRegularService } from './calcular-importe-regular.service';

describe('CalcularImporteRegularService', () => {
  let service: CalcularImporteRegularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularImporteRegularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
