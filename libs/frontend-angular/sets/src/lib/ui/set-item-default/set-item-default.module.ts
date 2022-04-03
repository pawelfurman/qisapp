import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetItemDefaultComponent } from './set-item-default.component';



@NgModule({
  declarations: [SetItemDefaultComponent],
  exports: [SetItemDefaultComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class SetItemDefaultModule { }
