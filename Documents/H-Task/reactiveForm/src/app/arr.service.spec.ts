import { TestBed } from '@angular/core/testing';

import { ArrService } from './arr.service';

describe('ArrService', () => {
  let service: ArrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
