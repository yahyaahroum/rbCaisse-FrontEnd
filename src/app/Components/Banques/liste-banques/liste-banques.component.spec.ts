import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBanquesComponent } from './liste-banques.component';

describe('ListeBanquesComponent', () => {
  let component: ListeBanquesComponent;
  let fixture: ComponentFixture<ListeBanquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeBanquesComponent]
    });
    fixture = TestBed.createComponent(ListeBanquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
