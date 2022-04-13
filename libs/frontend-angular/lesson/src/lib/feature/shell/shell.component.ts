import { Component } from '@angular/core';
import { LessonStore } from './lesson.store';

@Component({
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  providers: [LessonStore],
})
export class ShellComponent {}
