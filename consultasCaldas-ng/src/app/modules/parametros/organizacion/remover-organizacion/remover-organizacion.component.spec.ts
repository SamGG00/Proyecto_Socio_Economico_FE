import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverOrganizacionComponent } from './remover-organizacion.component';

describe('RemoverOrganizacionComponent', () => {
  let component: RemoverOrganizacionComponent;
  let fixture: ComponentFixture<RemoverOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverOrganizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
