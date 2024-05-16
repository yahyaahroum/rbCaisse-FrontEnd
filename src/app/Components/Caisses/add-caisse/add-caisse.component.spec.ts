import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaisseComponent } from './add-caisse.component';

describe('AddCaisseComponent', () => {
  let component: AddCaisseComponent;
  let fixture: ComponentFixture<AddCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCaisseComponent]
    });
    fixture = TestBed.createComponent(AddCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
