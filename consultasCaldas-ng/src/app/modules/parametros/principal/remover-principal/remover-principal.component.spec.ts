import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverPrincipalComponent } from './remover-principal.component';

describe('RemoverPrincipalComponent', () => {
  let component: RemoverPrincipalComponent;
  let fixture: ComponentFixture<RemoverPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
