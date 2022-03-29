import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExerciseFormModule } from '../../ui/exercise-form/exercise-form.module';
import { ExercisePreviousQuestionModule } from '../../ui/exercise-previous-question/exercise-previous-question.module';
import { ExerciseStatsModule } from '../../ui/exercise-stats/exercise-stats.module';

import { ExerciseWrapperComponent } from './exercise-wrapper.component';


@NgModule({
declarations: [ExerciseWrapperComponent],
  imports: [
      ExerciseStatsModule,
      ExerciseFormModule,
      ExercisePreviousQuestionModule,
      CommonModule
  ],
  exports: [ExerciseWrapperComponent]
})
export class ExerciseWrapperModule { }
