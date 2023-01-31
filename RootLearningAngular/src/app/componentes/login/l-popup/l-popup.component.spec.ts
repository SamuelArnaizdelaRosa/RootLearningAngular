import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPopupComponent } from './l-popup.component';

describe('LPopupComponent', () => {
  let component: LPopupComponent;
  let fixture: ComponentFixture<LPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
