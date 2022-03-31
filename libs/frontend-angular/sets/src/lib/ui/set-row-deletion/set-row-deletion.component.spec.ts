import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRowDeletionComponent } from './set-row-deletion.component';

describe('SetRowDeletionComponent', () => {
  let component: SetRowDeletionComponent;
  let fixture: ComponentFixture<SetRowDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetRowDeletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRowDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
