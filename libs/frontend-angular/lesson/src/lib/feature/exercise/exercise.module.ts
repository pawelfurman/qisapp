import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExerciseWrapperModule } from '../../containers/exercise-wrapper/exercise-wrapper.module';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { PageExerciseComponent } from './exercise.component';
import { ExerciseStore } from './exercise.store';



@NgModule({
  declarations: [
    PageExerciseComponent
  ],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    ExerciseWrapperModule,
  ],
  providers: [ExerciseStore]
})
export class ExerciseModule { }
