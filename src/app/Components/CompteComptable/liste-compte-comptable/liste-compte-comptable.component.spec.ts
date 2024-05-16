import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCompteComptableComponent } from './liste-compte-comptable.component';

describe('ListeCompteComptableComponent', () => {
  let component: ListeCompteComptableComponent;
  let fixture: ComponentFixture<ListeCompteComptableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCompteComptableComponent]
    });
    fixture = TestBed.createComponent(ListeCompteComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
