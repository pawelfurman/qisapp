import { FormGroup, FormBuilder } from '@angular/forms';
import { SetTableRowStore } from '../set-table-row/set-table-row.store';
import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { SetTableStore } from '../set-table/set-table.store';

@Component({
  selector: 'qis-set-row-edition',
  templateUrl: './set-row-edition.component.html',
  styleUrls: ['./set-row-edition.component.scss'],
})
export class SetRowEditionComponent implements OnInit, OnDestroy {

  @Input() id!: number;
  @Input() name!: string;
  @Input() description!: string;

  editForm: FormGroup = this.fb.group({
    name: [this.name],
    description: [this.description]
  })

  processing$ = this.setTableRowStore.processingUpdate$

  constructor(private setTableStore: SetTableStore, private setTableRowStore: SetTableRowStore, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm.patchValue({
      name: this.name,
      description: this.description
    })
  }

  ngOnDestroy(): void {
    this.editForm.reset()
  }

  saveChanges(){
    this.editForm.disable()
    this.setTableRowStore.updateSet(this.editForm.value)
  }

  rejectChanges(){
    this.setTableStore.setInitialView()
    this.editForm.reset()
  }
}
