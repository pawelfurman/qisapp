import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SetTableRowStore } from '../../store/set-table-row.store';
import { SetMode, SetTableStore } from '../../store/set-table.store';

export type SetRowVM = {
  id: number,
  isProcessing: boolean,
  name: string,
  description: string
}

@Component({
  selector: 'fa-set-row-default',
  templateUrl: './set-row-default.component.html',
  styleUrls: ['./set-row-default.component.scss']
})
export class SetRowDefaultComponent {
  @Input() id!: number;
  @Input() isProcessing!: boolean;
  @Input() name!: string;
  @Input() description!: string;

  @Output() edit: EventEmitter<[number, SetMode]> = new EventEmitter()
  @Output() checkDelete: EventEmitter<number> = new EventEmitter()
  @Output() openQuestions: EventEmitter<number> = new EventEmitter()
  
  editSet(){
    this.edit.emit([this.id, "edition"])
  }

  checkDeleteSet(){
    this.checkDelete.emit(this.id)
  }

  openQuestionsPopup(){
    this.openQuestions.emit(this.id)
  }
}
