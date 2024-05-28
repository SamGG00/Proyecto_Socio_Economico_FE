import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverApoyoSocioeconomicoComponent } from './remover-apoyo-socioeconomico.component';

describe('RemoverApoyoSocioeconomicoComponent', () => {
  let component: RemoverApoyoSocioeconomicoComponent;
  let fixture: ComponentFixture<RemoverApoyoSocioeconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverApoyoSocioeconomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverApoyoSocioeconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
