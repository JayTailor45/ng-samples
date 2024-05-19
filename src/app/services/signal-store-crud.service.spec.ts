import { TestBed } from '@angular/core/testing';

import { SignalStoreCrudService } from './signal-store-crud.service';

describe('SignalStoreCrudService', () => {
  let service: SignalStoreCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalStoreCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
