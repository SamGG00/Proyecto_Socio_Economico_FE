import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarApoyoComponent } from './editar-apoyo.component';

describe('EditarApoyoComponent', () => {
  let component: EditarApoyoComponent;
  let fixture: ComponentFixture<EditarApoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarApoyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
