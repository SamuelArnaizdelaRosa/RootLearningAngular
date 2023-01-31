import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCompraComponent } from './c-compra.component';

describe('CCompraComponent', () => {
  let component: CCompraComponent;
  let fixture: ComponentFixture<CCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
