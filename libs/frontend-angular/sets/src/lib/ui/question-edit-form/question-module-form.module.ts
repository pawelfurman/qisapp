import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionEditFormComponent } from './question-edit-form.component';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [QuestionEditFormComponent],
  exports: [QuestionEditFormComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class QuestionModuleFormModule { }
