import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
  @Input() isProcessing!: boolean

  @Output() confirm: EventEmitter<{name: string, description: string}> = new EventEmitter()
  @Output() cancel: EventEmitter<void> = new EventEmitter()

  editForm: FormGroup = this.fb.group({
    name: [this.name],
    description: [this.description]
  })

  constructor(private fb: FormBuilder) { }

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
    this.confirm.emit(this.editForm.value)
  }

  rejectChanges(){
    this.editForm.reset()
    this.cancel.emit()
  }
}
