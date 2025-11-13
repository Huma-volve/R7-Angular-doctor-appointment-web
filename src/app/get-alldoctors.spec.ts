import { TestBed } from '@angular/core/testing';

import { GetAlldoctors } from './get-alldoctors';

describe('GetAlldoctors', () => {
  let service: GetAlldoctors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAlldoctors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
