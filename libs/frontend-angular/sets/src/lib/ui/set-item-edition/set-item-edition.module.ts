import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetItemEditionComponent } from './set-item-edition.component';


@NgModule({
  declarations: [SetItemEditionComponent],
  exports: [SetItemEditionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class SetItemEditionModule { }
