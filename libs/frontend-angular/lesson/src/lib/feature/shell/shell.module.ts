import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { LessonCreatorModule } from '../../containers/lesson-creator/lesson-creator.module';



@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    CardModule,
    LessonCreatorModule
  ]
})
export class ShellModule { }
