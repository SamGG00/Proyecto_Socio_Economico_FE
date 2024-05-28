import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverMunicipioComponent } from './remover-municipio.component';

describe('RemoverMunicipioComponent', () => {
  let component: RemoverMunicipioComponent;
  let fixture: ComponentFixture<RemoverMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverMunicipioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
