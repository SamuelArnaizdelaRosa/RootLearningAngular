import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDestacadosComponent } from './b-destacados.component';

describe('BDestacadosComponent', () => {
  let component: BDestacadosComponent;
  let fixture: ComponentFixture<BDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDestacadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
