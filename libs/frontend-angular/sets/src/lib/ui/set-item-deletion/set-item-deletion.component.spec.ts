import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetItemDeletionComponent } from './set-item-deletion.component';

describe('SetItemDeletionComponent', () => {
  let component: SetItemDeletionComponent;
  let fixture: ComponentFixture<SetItemDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetItemDeletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetItemDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
