import { TestBed } from '@angular/core/testing';

import { FinancialsService } from './financials.service';

describe('FinancialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialsService = TestBed.get(FinancialsService);
    expect(service).toBeTruthy();
  });
});
