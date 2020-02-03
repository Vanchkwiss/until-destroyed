import { TestBed } from '@angular/core/testing';

import { UntilDestroyedService } from './until-destroyed.service';

describe('UntilDestroyedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UntilDestroyedService = TestBed.get(UntilDestroyedService);
    expect(service).toBeTruthy();
  });
});
