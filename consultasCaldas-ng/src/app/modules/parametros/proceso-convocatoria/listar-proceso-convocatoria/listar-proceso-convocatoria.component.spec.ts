import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProcesoConvocatoriaComponent } from './listar-proceso-convocatoria.component';

describe('ListarProcesoConvocatoriaComponent', () => {
  let component: ListarProcesoConvocatoriaComponent;
  let fixture: ComponentFixture<ListarProcesoConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProcesoConvocatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProcesoConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
