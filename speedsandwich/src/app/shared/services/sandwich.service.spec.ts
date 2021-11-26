import { TestBed } from '@angular/core/testing';

import { SandwichService } from './sandwich.service';

describe('SandwichService', () => {
  let service: SandwichService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandwichService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
