import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDemandeAlimentationComponent } from './update-demande-alimentation.component';

describe('UpdateDemandeAlimentationComponent', () => {
  let component: UpdateDemandeAlimentationComponent;
  let fixture: ComponentFixture<UpdateDemandeAlimentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDemandeAlimentationComponent]
    });
    fixture = TestBed.createComponent(UpdateDemandeAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
