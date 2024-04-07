import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverConvacatoriaComponent } from './remover-convacatoria.component';

describe('RemoverConvacatoriaComponent', () => {
  let component: RemoverConvacatoriaComponent;
  let fixture: ComponentFixture<RemoverConvacatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverConvacatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverConvacatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
