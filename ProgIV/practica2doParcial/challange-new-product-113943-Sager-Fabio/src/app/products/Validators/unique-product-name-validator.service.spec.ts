import { TestBed } from '@angular/core/testing';

import { UniqueProductNameValidatorService } from './unique-product-name-validator.service';

describe('UniqueProductNameValidatorService', () => {
  let service: UniqueProductNameValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueProductNameValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
