import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExerciseFormModule } from '../exercise-form/exercise-form.module';
import { ExercisePreviousQuestionModule } from '../exercise-previous-question/exercise-previous-question.module';
import { ExerciseStatsModule } from '../exercise-stats/exercise-stats.module';
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
