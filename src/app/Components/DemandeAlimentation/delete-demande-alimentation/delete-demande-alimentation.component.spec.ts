import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDemandeAlimentationComponent } from './delete-demande-alimentation.component';

describe('DeleteDemandeAlimentationComponent', () => {
  let component: DeleteDemandeAlimentationComponent;
  let fixture: ComponentFixture<DeleteDemandeAlimentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDemandeAlimentationComponent]
    });
    fixture = TestBed.createComponent(DeleteDemandeAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
