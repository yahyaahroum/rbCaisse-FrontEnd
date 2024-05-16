import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlimentationsComponent } from './add-alimentations.component';

describe('AddAlimentationsComponent', () => {
  let component: AddAlimentationsComponent;
  let fixture: ComponentFixture<AddAlimentationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAlimentationsComponent]
    });
    fixture = TestBed.createComponent(AddAlimentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
