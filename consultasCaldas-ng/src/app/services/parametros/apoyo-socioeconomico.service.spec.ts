import { TestBed } from '@angular/core/testing';

import { ApoyoSocioeconomicoService } from './apoyo-socioeconomico.service';

describe('ApoyoSocioeconomicoService', () => {
  let service: ApoyoSocioeconomicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApoyoSocioeconomicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
