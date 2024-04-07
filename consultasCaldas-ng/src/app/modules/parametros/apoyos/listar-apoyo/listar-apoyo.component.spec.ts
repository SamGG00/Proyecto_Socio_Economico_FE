import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarApoyoComponent } from './listar-apoyo.component';

describe('ListarApoyoComponent', () => {
  let component: ListarApoyoComponent;
  let fixture: ComponentFixture<ListarApoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarApoyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
