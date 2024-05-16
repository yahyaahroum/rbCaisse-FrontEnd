import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModeComponent } from './update-mode.component';

describe('UpdateModeComponent', () => {
  let component: UpdateModeComponent;
  let fixture: ComponentFixture<UpdateModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateModeComponent]
    });
    fixture = TestBed.createComponent(UpdateModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
