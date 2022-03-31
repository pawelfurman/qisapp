import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRowDeletionInabilityComponent } from './set-row-deletion-inability.component';

describe('SetRowDeletionInabilityComponent', () => {
  let component: SetRowDeletionInabilityComponent;
  let fixture: ComponentFixture<SetRowDeletionInabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetRowDeletionInabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRowDeletionInabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
