import { TestBed } from '@angular/core/testing';

import { ArmoniaService } from './armonia.service';

describe('ArmoniaService', () => {
  let service: ArmoniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmoniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
