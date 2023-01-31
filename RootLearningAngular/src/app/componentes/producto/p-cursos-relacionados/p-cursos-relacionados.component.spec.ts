import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCursosRelacionadosComponent } from './p-cursos-relacionados.component';

describe('PCursosRelacionadosComponent', () => {
  let component: PCursosRelacionadosComponent;
  let fixture: ComponentFixture<PCursosRelacionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCursosRelacionadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCursosRelacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
