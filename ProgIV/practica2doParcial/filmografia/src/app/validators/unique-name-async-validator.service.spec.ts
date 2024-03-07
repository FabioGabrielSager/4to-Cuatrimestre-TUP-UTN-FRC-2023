import { TestBed } from '@angular/core/testing';

import { UniqueNameAsyncValidator } from './unique-name-async-validator.service';

describe('UniqueNameAsyncValidatorService', () => {
  let service: UniqueNameAsyncValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueNameAsyncValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
