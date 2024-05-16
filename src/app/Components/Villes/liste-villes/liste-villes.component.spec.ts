import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVillesComponent } from './liste-villes.component';

describe('ListeVillesComponent', () => {
  let component: ListeVillesComponent;
  let fixture: ComponentFixture<ListeVillesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeVillesComponent]
    });
    fixture = TestBed.createComponent(ListeVillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
