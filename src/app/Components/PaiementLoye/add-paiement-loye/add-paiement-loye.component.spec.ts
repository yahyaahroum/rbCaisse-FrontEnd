import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaiementLoyeComponent } from './add-paiement-loye.component';

describe('AddPaiementLoyeComponent', () => {
  let component: AddPaiementLoyeComponent;
  let fixture: ComponentFixture<AddPaiementLoyeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPaiementLoyeComponent]
    });
    fixture = TestBed.createComponent(AddPaiementLoyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
