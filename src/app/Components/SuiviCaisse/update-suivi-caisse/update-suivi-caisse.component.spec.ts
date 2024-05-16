import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuiviCaisseComponent } from './update-suivi-caisse.component';

describe('UpdateSuiviCaisseComponent', () => {
  let component: UpdateSuiviCaisseComponent;
  let fixture: ComponentFixture<UpdateSuiviCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSuiviCaisseComponent]
    });
    fixture = TestBed.createComponent(UpdateSuiviCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
