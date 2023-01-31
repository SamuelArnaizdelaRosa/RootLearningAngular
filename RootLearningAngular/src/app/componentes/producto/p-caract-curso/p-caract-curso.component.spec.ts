import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCaractCursoComponent } from './p-caract-curso.component';

describe('PCaractCursoComponent', () => {
  let component: PCaractCursoComponent;
  let fixture: ComponentFixture<PCaractCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCaractCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCaractCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
