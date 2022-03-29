import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExerciseComponent } from './page-exercise.component';

describe('PageExerciseComponent', () => {
  let component: PageExerciseComponent;
  let fixture: ComponentFixture<PageExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
