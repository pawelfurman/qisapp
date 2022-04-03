import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetItemDeletionInabilityComponent } from './set-item-deletion-inability.component';

describe('SetItemDeletionInabilityComponent', () => {
  let component: SetItemDeletionInabilityComponent;
  let fixture: ComponentFixture<SetItemDeletionInabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetItemDeletionInabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetItemDeletionInabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
