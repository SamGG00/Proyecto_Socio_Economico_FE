import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverApoyoComponent } from './remover-apoyo.component';

describe('RemoverApoyoComponent', () => {
  let component: RemoverApoyoComponent;
  let fixture: ComponentFixture<RemoverApoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverApoyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
