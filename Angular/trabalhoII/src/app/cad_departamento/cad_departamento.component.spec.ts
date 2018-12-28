import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cad_DepartamentoComponent } from './cad_departamento.component';

describe('TimelineComponent', () => {
  let component: Cad_DepartamentoComponent;
  let fixture: ComponentFixture<Cad_DepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cad_DepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cad_DepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
