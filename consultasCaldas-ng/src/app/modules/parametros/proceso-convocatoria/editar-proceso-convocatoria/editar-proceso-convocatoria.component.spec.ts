import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProcesoConvocatoriaComponent } from './editar-proceso-convocatoria.component';

describe('EditarProcesoConvocatoriaComponent', () => {
  let component: EditarProcesoConvocatoriaComponent;
  let fixture: ComponentFixture<EditarProcesoConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProcesoConvocatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProcesoConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
