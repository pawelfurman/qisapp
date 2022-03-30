import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRowDefaultComponent } from './set-row-default.component';

describe('SetRowDefaultComponent', () => {
  let component: SetRowDefaultComponent;
  let fixture: ComponentFixture<SetRowDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetRowDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRowDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
