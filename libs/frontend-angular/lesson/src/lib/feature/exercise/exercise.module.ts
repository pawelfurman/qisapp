import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExerciseWrapperModule } from '../../containers/exercise-wrapper/exercise-wrapper.module';
import { ExerciseStore } from '../../store/exercise.store';
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
  ],
  providers: [ExerciseStore]
})
export class ExerciseModule { }
