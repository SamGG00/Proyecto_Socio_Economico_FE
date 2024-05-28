import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverProcesoConvocatoriaComponent } from './remover-proceso-convocatoria.component';

describe('RemoverProcesoConvocatoriaComponent', () => {
  let component: RemoverProcesoConvocatoriaComponent;
  let fixture: ComponentFixture<RemoverProcesoConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverProcesoConvocatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverProcesoConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
