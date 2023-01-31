import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCursosComponent } from './b-cursos.component';

describe('BCursosComponent', () => {
  let component: BCursosComponent;
  let fixture: ComponentFixture<BCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
