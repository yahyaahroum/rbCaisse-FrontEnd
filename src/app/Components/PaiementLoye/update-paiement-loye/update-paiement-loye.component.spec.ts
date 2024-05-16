import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaiementLoyeComponent } from './update-paiement-loye.component';

describe('UpdatePaiementLoyeComponent', () => {
  let component: UpdatePaiementLoyeComponent;
  let fixture: ComponentFixture<UpdatePaiementLoyeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePaiementLoyeComponent]
    });
    fixture = TestBed.createComponent(UpdatePaiementLoyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
