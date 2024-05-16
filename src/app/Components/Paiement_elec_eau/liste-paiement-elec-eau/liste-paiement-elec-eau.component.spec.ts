import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePaiementElecEauComponent } from './liste-paiement-elec-eau.component';

describe('ListePaiementElecEauComponent', () => {
  let component: ListePaiementElecEauComponent;
  let fixture: ComponentFixture<ListePaiementElecEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePaiementElecEauComponent]
    });
    fixture = TestBed.createComponent(ListePaiementElecEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
