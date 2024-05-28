import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverProgramaComponent } from './remover-programa.component';

describe('RemoverProgramaComponent', () => {
  let component: RemoverProgramaComponent;
  let fixture: ComponentFixture<RemoverProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
