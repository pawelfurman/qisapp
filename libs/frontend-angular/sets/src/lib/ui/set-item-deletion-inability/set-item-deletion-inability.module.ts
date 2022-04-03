import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetItemDeletionInabilityComponent } from './set-item-deletion-inability.component';



@NgModule({
  declarations: [SetItemDeletionInabilityComponent],
  exports: [SetItemDeletionInabilityComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class SetItemDeletionInabilityModule { }
