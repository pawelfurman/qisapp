import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExerciseWrapperModule } from '../../ui/exercise-wrapper/exercise-wrapper.module';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { PageExerciseComponent } from './exercise.component';



@NgModule({
  declarations: [
    PageExerciseComponent
  ],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    ExerciseWrapperModule,
    
  ]
})
export class ExerciseModule { }
