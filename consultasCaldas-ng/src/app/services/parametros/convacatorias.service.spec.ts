import { TestBed } from '@angular/core/testing';

import { ConvacatoriasService } from './convacatorias.service';

describe('ConvacatoriasService', () => {
  let service: ConvacatoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvacatoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
