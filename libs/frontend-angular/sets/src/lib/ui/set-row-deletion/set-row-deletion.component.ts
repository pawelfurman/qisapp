import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fa-set-row-deletion',
  templateUrl: './set-row-deletion.component.html',
  styleUrls: ['./set-row-deletion.component.scss']
})
export class SetRowDeletionComponent {

  @Input() id!: number;
  @Input() isProcessing!: boolean

  @Output() confirm: EventEmitter<number> = new EventEmitter()
  @Output() cancel: EventEmitter<void> = new EventEmitter()

  confirmDelete(){
    this.confirm.emit(this.id);
  }

  rejectDelete(){
    this.cancel.emit()
  }
}
