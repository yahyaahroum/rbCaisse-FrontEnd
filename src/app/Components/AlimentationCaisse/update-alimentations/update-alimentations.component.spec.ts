import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlimentationsComponent } from './update-alimentations.component';

describe('UpdateAlimentationsComponent', () => {
  let component: UpdateAlimentationsComponent;
  let fixture: ComponentFixture<UpdateAlimentationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAlimentationsComponent]
    });
    fixture = TestBed.createComponent(UpdateAlimentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
