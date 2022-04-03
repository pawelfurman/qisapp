import { ButtonModule } from 'primeng/button';
import { SetItemDeletionComponent } from './set-item-deletion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SetItemDeletionComponent],
  exports: [SetItemDeletionComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class SetItemDeletionModule { }
