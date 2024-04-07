import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConvacatoriaComponent } from './editar-convacatoria.component';

describe('EditarConvacatoriaComponent', () => {
  let component: EditarConvacatoriaComponent;
  let fixture: ComponentFixture<EditarConvacatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConvacatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConvacatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
