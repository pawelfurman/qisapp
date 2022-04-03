import { SetItemEditionModule } from './../../ui/set-item-edition/set-item-edition.module';
import { SetItemDeletionInabilityModule } from './../../ui/set-item-deletion-inability/set-item-deletion-inability.module';
import { SetItemDeletionModule } from './../../ui/set-item-deletion/set-item-deletion.module';
import { SetItemDefaultModule } from './../../ui/set-item-default/set-item-default.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SetListItemComponent } from '../../containers/set-list-item/set-list-item.component';
import { SetsEntitiesStore } from '../../data-access/sets/sets-entities.store';
import { SetsFetchStore } from '../../data-access/sets/sets-fetch.store';
import { SetsStore } from './sets.store';
import { SetAddFormModule } from '../../ui/set-add-form/set-add-form.module';
import { SetListComponent } from './../../containers/set-list/set-list.component';
import { SetsRoutingModule } from './sets-routing.module';
import { SetsComponent } from './sets.component';


@NgModule({
  declarations: [
    SetsComponent,
    SetListItemComponent,
    SetListComponent
  ],
  imports: [
    CommonModule,
    SetsRoutingModule,
    CardModule,
    DynamicDialogModule,
    SetAddFormModule,
    SetItemDefaultModule,
    SetItemDeletionModule,
    SetItemDeletionInabilityModule,
    SetItemEditionModule
  ],
  providers: [SetsStore, SetsEntitiesStore, SetsFetchStore],
})
export class SetsModule {
 }
