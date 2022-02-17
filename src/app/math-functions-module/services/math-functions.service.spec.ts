import { TestBed } from '@angular/core/testing';

import { MathFunctionsService } from './math-functions.service';

describe('MathFunctionsService', () => {
  let service: MathFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
