import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LContenidoComponent } from './l-contenido.component';

describe('LContenidoComponent', () => {
  let component: LContenidoComponent;
  let fixture: ComponentFixture<LContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
