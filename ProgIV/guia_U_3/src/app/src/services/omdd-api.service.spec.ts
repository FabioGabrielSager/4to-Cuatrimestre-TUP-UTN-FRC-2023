import { TestBed } from '@angular/core/testing';

import { OmddApiClientService } from './omdd-api-client.service';

describe('OmddApiService', () => {
  let service: OmddApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmddApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
