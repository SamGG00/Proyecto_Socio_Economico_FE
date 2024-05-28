import { TestBed } from '@angular/core/testing';

import { ProcesoConvocatoriaService } from './proceso-convocatoria.service';

describe('ProcesoConvocatoriaService', () => {
  let service: ProcesoConvocatoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcesoConvocatoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
