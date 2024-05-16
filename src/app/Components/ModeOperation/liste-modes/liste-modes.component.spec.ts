import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeModesComponent } from './liste-modes.component';

describe('ListeModesComponent', () => {
  let component: ListeModesComponent;
  let fixture: ComponentFixture<ListeModesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeModesComponent]
    });
    fixture = TestBed.createComponent(ListeModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
