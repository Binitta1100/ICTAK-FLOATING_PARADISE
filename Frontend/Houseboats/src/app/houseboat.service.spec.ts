import { TestBed } from '@angular/core/testing';

import { HouseboatService } from './houseboat.service';

describe('HouseboatService', () => {
  let service: HouseboatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseboatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
