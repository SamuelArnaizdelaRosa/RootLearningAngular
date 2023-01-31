import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCompraComponent } from './p-compra.component';

describe('PCompraComponent', () => {
  let component: PCompraComponent;
  let fixture: ComponentFixture<PCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
