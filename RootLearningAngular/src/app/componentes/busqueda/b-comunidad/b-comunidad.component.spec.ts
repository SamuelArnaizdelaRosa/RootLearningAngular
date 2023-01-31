import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComunidadComponent } from './b-comunidad.component';

describe('BComunidadComponent', () => {
  let component: BComunidadComponent;
  let fixture: ComponentFixture<BComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BComunidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
