import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaiementElecEauComponent } from './update-paiement-elec-eau.component';

describe('UpdatePaiementElecEauComponent', () => {
  let component: UpdatePaiementElecEauComponent;
  let fixture: ComponentFixture<UpdatePaiementElecEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePaiementElecEauComponent]
    });
    fixture = TestBed.createComponent(UpdatePaiementElecEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
