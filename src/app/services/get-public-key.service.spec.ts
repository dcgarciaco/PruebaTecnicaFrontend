import { TestBed } from '@angular/core/testing';

import { GetPublicKeyService } from './get-public-key.service';

describe('GetPublicKeyService', () => {
  let service: GetPublicKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPublicKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
