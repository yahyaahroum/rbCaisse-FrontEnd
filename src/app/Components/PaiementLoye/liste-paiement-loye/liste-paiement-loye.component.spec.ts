import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePaiementLoyeComponent } from './liste-paiement-loye.component';

describe('ListePaiementLoyeComponent', () => {
  let component: ListePaiementLoyeComponent;
  let fixture: ComponentFixture<ListePaiementLoyeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePaiementLoyeComponent]
    });
    fixture = TestBed.createComponent(ListePaiementLoyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
