import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverContactoComponent } from './remover-contacto.component';

describe('RemoverContactoComponent', () => {
  let component: RemoverContactoComponent;
  let fixture: ComponentFixture<RemoverContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
