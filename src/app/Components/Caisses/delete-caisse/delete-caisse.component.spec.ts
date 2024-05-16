import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCaisseComponent } from './delete-caisse.component';

describe('DeleteCaisseComponent', () => {
  let component: DeleteCaisseComponent;
  let fixture: ComponentFixture<DeleteCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCaisseComponent]
    });
    fixture = TestBed.createComponent(DeleteCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
