import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fa-set-item-deletion-inability',
  templateUrl: './set-item-deletion-inability.component.html',
  styleUrls: ['./set-item-deletion-inability.component.scss']
})
export class SetItemDeletionInabilityComponent {

  @Input() id!: number
  @Output() confirm: EventEmitter<void> = new EventEmitter()

  confirmMessage(){
    this.confirm.emit()
  }

}
