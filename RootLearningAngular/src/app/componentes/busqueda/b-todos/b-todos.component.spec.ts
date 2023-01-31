import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTodosComponent } from './b-todos.component';

describe('BTodosComponent', () => {
  let component: BTodosComponent;
  let fixture: ComponentFixture<BTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
