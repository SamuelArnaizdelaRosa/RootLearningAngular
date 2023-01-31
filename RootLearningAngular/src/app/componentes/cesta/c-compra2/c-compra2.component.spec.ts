import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCompra2Component } from './c-compra2.component';

describe('CCompra2Component', () => {
  let component: CCompra2Component;
  let fixture: ComponentFixture<CCompra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCompra2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCompra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
