import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarApoyoSocioeconomicoComponent } from './listar-apoyo-socioeconomico.component';

describe('ListarApoyoSocioeconomicoComponent', () => {
  let component: ListarApoyoSocioeconomicoComponent;
  let fixture: ComponentFixture<ListarApoyoSocioeconomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarApoyoSocioeconomicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarApoyoSocioeconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
