import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSuiviCaisseComponent } from './liste-suivi-caisse.component';

describe('ListeSuiviCaisseComponent', () => {
  let component: ListeSuiviCaisseComponent;
  let fixture: ComponentFixture<ListeSuiviCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSuiviCaisseComponent]
    });
    fixture = TestBed.createComponent(ListeSuiviCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
