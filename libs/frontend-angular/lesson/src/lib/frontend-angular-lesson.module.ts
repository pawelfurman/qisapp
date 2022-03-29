
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShellModule } from './feature/shell/shell.module';
import { LessonStore } from './store/lesson.store';
import { ExerciseEngineService } from './utils/exercise-engine.service';

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
