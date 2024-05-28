import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarApoyoSocioeconomicoComponent } from './editar-apoyo-socioeconomico.component';

describe('EditarApoyoSocioeconomicoComponent', () => {
  let component: EditarApoyoSocioeconomicoComponent;
  let fixture: ComponentFixture<EditarApoyoSocioeconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarApoyoSocioeconomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarApoyoSocioeconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
