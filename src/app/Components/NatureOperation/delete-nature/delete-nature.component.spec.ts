import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNatureComponent } from './delete-nature.component';

describe('DeleteNatureComponent', () => {
  let component: DeleteNatureComponent;
  let fixture: ComponentFixture<DeleteNatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteNatureComponent]
    });
    fixture = TestBed.createComponent(DeleteNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
