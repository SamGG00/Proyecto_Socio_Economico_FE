import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProcesoConvocatoriaComponent } from './crear-proceso-convocatoria.component';

describe('CrearProcesoConvocatoriaComponent', () => {
  let component: CrearProcesoConvocatoriaComponent;
  let fixture: ComponentFixture<CrearProcesoConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProcesoConvocatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProcesoConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
