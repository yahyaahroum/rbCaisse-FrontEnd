import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNaturesComponent } from './liste-natures.component';

describe('ListeNaturesComponent', () => {
  let component: ListeNaturesComponent;
  let fixture: ComponentFixture<ListeNaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeNaturesComponent]
    });
    fixture = TestBed.createComponent(ListeNaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
