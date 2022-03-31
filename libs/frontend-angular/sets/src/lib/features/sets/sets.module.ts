import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { SetsRoutingModule } from './sets-routing.module';
import { SetsComponent } from './sets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { SetAddFormComponent } from '../../containers/set-add-form/set-add-form.component';
import { SetRowDefaultComponent } from '../../ui/set-row-default/set-row-default.component';
import { SetRowDeletionComponent } from '../../ui/set-row-deletion/set-row-deletion.component';
import { SetRowEditionComponent } from '../../ui/set-row-edition/set-row-edition.component';
import { SetTableRowComponent } from '../../containers/set-table-row/set-table-row.component';
import { SetTableComponent } from '../../containers/set-table/set-table.component';
import { SetsStore } from '../../store/sets.store';
import { SetRowDeletionInabilityComponent } from '../../ui/set-row-deletion-inability/set-row-deletion-inability.component';


@NgModule({
  declarations: [
    SetsComponent,
    SetTableRowComponent,
    SetTableComponent,
    SetRowDefaultComponent,
    SetRowEditionComponent,
    SetRowDeletionComponent,
    SetRowDeletionInabilityComponent,
    SetAddFormComponent
    
  ],
  imports: [
    CommonModule,
    SetsRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule
  ],
  providers: [SetsStore],
})
export class SetsModule {
 }
