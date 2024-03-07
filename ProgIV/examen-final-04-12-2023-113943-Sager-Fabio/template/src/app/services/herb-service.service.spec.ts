import { TestBed } from '@angular/core/testing';

import { HerbService } from './herb.service';

describe('HerbServiceService', () => {
  let service: HerbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
