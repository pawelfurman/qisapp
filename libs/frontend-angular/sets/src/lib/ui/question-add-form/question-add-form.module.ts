import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionAddFormComponent } from './question-add-form.component';



@NgModule({
  declarations: [QuestionAddFormComponent],
  exports: [QuestionAddFormComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule
  ]
})
export class QuestionAddFormModule { }
