import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaiementElecEauComponent } from './delete-paiement-elec-eau.component';

describe('DeletePaiementElecEauComponent', () => {
  let component: DeletePaiementElecEauComponent;
  let fixture: ComponentFixture<DeletePaiementElecEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePaiementElecEauComponent]
    });
    fixture = TestBed.createComponent(DeletePaiementElecEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
