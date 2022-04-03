import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fa-set-item-deletion',
  templateUrl: './set-item-deletion.component.html',
  styleUrls: ['./set-item-deletion.component.scss']
})
export class SetItemDeletionComponent {

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
