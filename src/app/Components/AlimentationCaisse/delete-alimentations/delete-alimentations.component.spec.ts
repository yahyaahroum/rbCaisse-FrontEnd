import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlimentationsComponent } from './delete-alimentations.component';

describe('DeleteAlimentationsComponent', () => {
  let component: DeleteAlimentationsComponent;
  let fixture: ComponentFixture<DeleteAlimentationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAlimentationsComponent]
    });
    fixture = TestBed.createComponent(DeleteAlimentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
