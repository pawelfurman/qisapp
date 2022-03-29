import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAddFormComponent } from './set-add-form.component';

describe('SetAddFormComponent', () => {
  let component: SetAddFormComponent;
  let fixture: ComponentFixture<SetAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
