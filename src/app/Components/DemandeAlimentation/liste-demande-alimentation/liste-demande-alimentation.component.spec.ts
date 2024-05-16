import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeAlimentationComponent } from './liste-demande-alimentation.component';

describe('ListeDemandeAlimentationComponent', () => {
  let component: ListeDemandeAlimentationComponent;
  let fixture: ComponentFixture<ListeDemandeAlimentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDemandeAlimentationComponent]
    });
    fixture = TestBed.createComponent(ListeDemandeAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
