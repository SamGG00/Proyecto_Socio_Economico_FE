import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApoyoComponent } from './crear-apoyo.component';

describe('CrearApoyoComponent', () => {
  let component: CrearApoyoComponent;
  let fixture: ComponentFixture<CrearApoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearApoyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
