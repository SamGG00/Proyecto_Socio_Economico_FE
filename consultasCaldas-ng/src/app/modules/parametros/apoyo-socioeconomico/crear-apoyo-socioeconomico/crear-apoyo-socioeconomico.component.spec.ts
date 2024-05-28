import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApoyoSocioeconomicoComponent } from './crear-apoyo-socioeconomico.component';

describe('CrearApoyoSocioeconomicoComponent', () => {
  let component: CrearApoyoSocioeconomicoComponent;
  let fixture: ComponentFixture<CrearApoyoSocioeconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearApoyoSocioeconomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearApoyoSocioeconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
