import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTalleresComponent } from './b-talleres.component';

describe('BTalleresComponent', () => {
  let component: BTalleresComponent;
  let fixture: ComponentFixture<BTalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTalleresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
