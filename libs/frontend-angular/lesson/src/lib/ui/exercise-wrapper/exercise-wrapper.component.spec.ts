import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseWrapperComponent } from './exercise-wrapper.component';

describe('ExerciseWrapperComponent', () => {
  let component: ExerciseWrapperComponent;
  let fixture: ComponentFixture<ExerciseWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
