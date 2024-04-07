import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConvacatoriaComponent } from './listar-convacatoria.component';

describe('ListarConvacatoriaComponent', () => {
  let component: ListarConvacatoriaComponent;
  let fixture: ComponentFixture<ListarConvacatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConvacatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConvacatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
