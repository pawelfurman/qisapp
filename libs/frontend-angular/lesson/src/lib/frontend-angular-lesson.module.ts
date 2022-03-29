
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExerciseEngineService } from './feature/exercise/exercise-engine.service';
import { ExerciseModule } from './feature/exercise/exercise.module';
import { ShellModule } from './feature/shell/shell.module';
import { LessonStore } from './store/lesson.store';

export const frontendAngularLessonRoutes: Route[] = [
  {}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShellModule,
    
  ],
  providers: [LessonStore, ExerciseEngineService]
})
export class FrontendAngularLessonModule { }
