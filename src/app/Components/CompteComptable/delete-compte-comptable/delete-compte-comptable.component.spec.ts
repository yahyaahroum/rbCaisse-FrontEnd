import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompteComptableComponent } from './delete-compte-comptable.component';

describe('DeleteCompteComptableComponent', () => {
  let component: DeleteCompteComptableComponent;
  let fixture: ComponentFixture<DeleteCompteComptableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCompteComptableComponent]
    });
    fixture = TestBed.createComponent(DeleteCompteComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
