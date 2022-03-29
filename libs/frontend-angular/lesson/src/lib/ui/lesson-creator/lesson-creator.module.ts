import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { LessonCreatorComponent } from './lesson-creator.component';


@NgModule({
declarations: [LessonCreatorComponent],
  imports: [
      ReactiveFormsModule,
      ListboxModule,
      CommonModule,
      InputTextModule,
      InputSwitchModule,
      ButtonModule,
      
    ],
  exports: [LessonCreatorComponent]
})
export class LessonCreatorModule { }
