import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurComponent } from './compteur.component';

describe('CompteurComponent', () => {
  let component: CompteurComponent;
  let fixture: ComponentFixture<CompteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompteurComponent]
    });
    fixture = TestBed.createComponent(CompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
