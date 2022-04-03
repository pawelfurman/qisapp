import { Component, EventEmitter, Input, Output } from '@angular/core';


export type SetRowVM = {
  id: number,
  isProcessing: boolean,
  name: string,
  description: string
}

@Component({
  selector: 'fa-set-item-default',
  templateUrl: './set-item-default.component.html',
  styleUrls: ['./set-item-default.component.scss']
})
export class SetItemDefaultComponent {
  @Input() id!: number;
  @Input() isProcessing!: boolean;
  @Input() name!: string;
  @Input() description!: string;

  @Output() edit: EventEmitter<void> = new EventEmitter()
  @Output() checkDelete: EventEmitter<number> = new EventEmitter()
  @Output() openQuestions: EventEmitter<number> = new EventEmitter()
  
  editSet(){
    this.edit.emit()
  }

  checkDeleteSet(){
    this.checkDelete.emit(this.id)
  }

  openQuestionsPopup(){
    this.openQuestions.emit(this.id)
  }
}
