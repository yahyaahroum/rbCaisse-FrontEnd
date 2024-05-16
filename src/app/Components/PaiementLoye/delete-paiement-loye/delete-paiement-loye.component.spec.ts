import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaiementLoyeComponent } from './delete-paiement-loye.component';

describe('DeletePaiementLoyeComponent', () => {
  let component: DeletePaiementLoyeComponent;
  let fixture: ComponentFixture<DeletePaiementLoyeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePaiementLoyeComponent]
    });
    fixture = TestBed.createComponent(DeletePaiementLoyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
