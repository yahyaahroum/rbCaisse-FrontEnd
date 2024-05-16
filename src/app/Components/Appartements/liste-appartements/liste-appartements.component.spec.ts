import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAppartementsComponent } from './liste-appartements.component';

describe('ListeAppartementsComponent', () => {
  let component: ListeAppartementsComponent;
  let fixture: ComponentFixture<ListeAppartementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeAppartementsComponent]
    });
    fixture = TestBed.createComponent(ListeAppartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
