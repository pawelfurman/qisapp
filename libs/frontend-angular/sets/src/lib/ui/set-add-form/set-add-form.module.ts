import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetAddFormComponent } from './set-add-form.component';



@NgModule({
  declarations: [SetAddFormComponent],
  exports: [SetAddFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class SetAddFormModule { }
