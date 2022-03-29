import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExerciseStatsComponent } from './exercise-stats.component';


@NgModule({
declarations: [ExerciseStatsComponent],
  imports: [

      CommonModule,
      ProgressBarModule

    ],
  exports: [ExerciseStatsComponent]
})
export class ExerciseStatsModule { }
