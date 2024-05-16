import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNatureComponent } from './update-nature.component';

describe('UpdateNatureComponent', () => {
  let component: UpdateNatureComponent;
  let fixture: ComponentFixture<UpdateNatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNatureComponent]
    });
    fixture = TestBed.createComponent(UpdateNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
