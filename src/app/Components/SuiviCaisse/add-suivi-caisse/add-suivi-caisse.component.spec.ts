import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuiviCaisseComponent } from './add-suivi-caisse.component';

describe('AddSuiviCaisseComponent', () => {
  let component: AddSuiviCaisseComponent;
  let fixture: ComponentFixture<AddSuiviCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSuiviCaisseComponent]
    });
    fixture = TestBed.createComponent(AddSuiviCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
