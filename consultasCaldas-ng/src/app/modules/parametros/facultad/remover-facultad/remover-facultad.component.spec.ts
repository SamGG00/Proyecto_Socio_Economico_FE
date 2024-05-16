import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverFacultadComponent } from './remover-facultad.component';

describe('RemoverFacultadComponent', () => {
  let component: RemoverFacultadComponent;
  let fixture: ComponentFixture<RemoverFacultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverFacultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
