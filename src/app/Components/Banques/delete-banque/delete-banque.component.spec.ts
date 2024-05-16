import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBanqueComponent } from './delete-banque.component';

describe('DeleteBanqueComponent', () => {
  let component: DeleteBanqueComponent;
  let fixture: ComponentFixture<DeleteBanqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBanqueComponent]
    });
    fixture = TestBed.createComponent(DeleteBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
