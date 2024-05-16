import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuiviCaisseComponent } from './delete-suivi-caisse.component';

describe('DeleteSuiviCaisseComponent', () => {
  let component: DeleteSuiviCaisseComponent;
  let fixture: ComponentFixture<DeleteSuiviCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSuiviCaisseComponent]
    });
    fixture = TestBed.createComponent(DeleteSuiviCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
