import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTemasComponent } from './p-temas.component';

describe('PTemasComponent', () => {
  let component: PTemasComponent;
  let fixture: ComponentFixture<PTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
