import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAlimentationsComponent } from './liste-alimentations.component';

describe('ListeAlimentationsComponent', () => {
  let component: ListeAlimentationsComponent;
  let fixture: ComponentFixture<ListeAlimentationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeAlimentationsComponent]
    });
    fixture = TestBed.createComponent(ListeAlimentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
