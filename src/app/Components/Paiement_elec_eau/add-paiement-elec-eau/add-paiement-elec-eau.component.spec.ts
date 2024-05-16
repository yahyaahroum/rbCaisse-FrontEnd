import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaiementElecEauComponent } from './add-paiement-elec-eau.component';

describe('AddPaiementElecEauComponent', () => {
  let component: AddPaiementElecEauComponent;
  let fixture: ComponentFixture<AddPaiementElecEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPaiementElecEauComponent]
    });
    fixture = TestBed.createComponent(AddPaiementElecEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
