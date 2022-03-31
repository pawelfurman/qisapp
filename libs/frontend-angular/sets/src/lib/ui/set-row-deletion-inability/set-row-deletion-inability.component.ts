import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fa-set-row-deletion-inability',
  templateUrl: './set-row-deletion-inability.component.html',
  styleUrls: ['./set-row-deletion-inability.component.scss']
})
export class SetRowDeletionInabilityComponent {

  @Input() id!: number
  @Output() confirm: EventEmitter<void> = new EventEmitter()

  confirmMessage(){
    this.confirm.emit()
  }

}
