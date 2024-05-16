import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandeAlimentationComponent } from './add-demande-alimentation.component';

describe('AddDemandeAlimentationComponent', () => {
  let component: AddDemandeAlimentationComponent;
  let fixture: ComponentFixture<AddDemandeAlimentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDemandeAlimentationComponent]
    });
    fixture = TestBed.createComponent(AddDemandeAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
