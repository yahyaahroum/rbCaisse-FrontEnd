import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModeComponent } from './add-mode.component';

describe('AddModeComponent', () => {
  let component: AddModeComponent;
  let fixture: ComponentFixture<AddModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddModeComponent]
    });
    fixture = TestBed.createComponent(AddModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
