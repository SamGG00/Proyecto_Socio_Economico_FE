import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProgramaComponent } from './listar-programa.component';

describe('ListarProgramaComponent', () => {
  let component: ListarProgramaComponent;
  let fixture: ComponentFixture<ListarProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
