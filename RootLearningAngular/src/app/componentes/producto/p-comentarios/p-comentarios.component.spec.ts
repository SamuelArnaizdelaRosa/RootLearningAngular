import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PComentariosComponent } from './p-comentarios.component';

describe('PComentariosComponent', () => {
  let component: PComentariosComponent;
  let fixture: ComponentFixture<PComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PComentariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
