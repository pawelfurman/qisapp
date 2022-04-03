import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetItemDefaultComponent } from './set-item-default.component';

describe('SetItemDefaultComponent', () => {
  let component: SetItemDefaultComponent;
  let fixture: ComponentFixture<SetItemDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetItemDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetItemDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
