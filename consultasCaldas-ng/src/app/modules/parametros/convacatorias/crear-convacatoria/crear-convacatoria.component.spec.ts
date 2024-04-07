import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConvacatoriaComponent } from './crear-convacatoria.component';

describe('CrearConvacatoriaComponent', () => {
  let component: CrearConvacatoriaComponent;
  let fixture: ComponentFixture<CrearConvacatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearConvacatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConvacatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
