import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComptaComptableComponent } from './update-compta-comptable.component';

describe('UpdateComptaComptableComponent', () => {
  let component: UpdateComptaComptableComponent;
  let fixture: ComponentFixture<UpdateComptaComptableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComptaComptableComponent]
    });
    fixture = TestBed.createComponent(UpdateComptaComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
