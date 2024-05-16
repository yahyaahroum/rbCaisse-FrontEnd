import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAppartementComponent } from './delete-appartement.component';

describe('DeleteAppartementComponent', () => {
  let component: DeleteAppartementComponent;
  let fixture: ComponentFixture<DeleteAppartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAppartementComponent]
    });
    fixture = TestBed.createComponent(DeleteAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
