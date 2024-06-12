import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrincipalComponent } from './listar-principal.component';

describe('ListarPrincipalComponent', () => {
  let component: ListarPrincipalComponent;
  let fixture: ComponentFixture<ListarPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
