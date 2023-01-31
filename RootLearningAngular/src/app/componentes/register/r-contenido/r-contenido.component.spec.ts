import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RContenidoComponent } from './r-contenido.component';

describe('RContenidoComponent', () => {
  let component: RContenidoComponent;
  let fixture: ComponentFixture<RContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
