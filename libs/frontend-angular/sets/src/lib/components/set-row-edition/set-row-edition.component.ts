import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SetTableStore } from '../../store/set-table.store';
import { SetTableRowStore } from '../../store/set-table-row.store';

@Component({
  selector: 'fa-set-row-edition',
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
