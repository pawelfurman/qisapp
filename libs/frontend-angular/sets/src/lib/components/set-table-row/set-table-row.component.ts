

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Set } from '../../features/sets/sets.types';
import { SetMode, SetTableStore } from '../../store/set-table.store';
import { SetTableRowStore } from '../../store/set-table-row.store';
import { Router } from '@angular/router';

@Component({
  selector: 'fa-set-table-row',
  templateUrl: './set-table-row.component.html',
  styleUrls: ['./set-table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SetTableRowStore]

})
export class SetTableRowComponent {
  vm$ = this.setTableRowStore.vm$

  private _set!: Set
  @Input() set set(value: Set) {
    this.setTableRowStore.setSetId(value.id)
    this._set = value;
  };  
  get set(){
    return this._set
  }

  constructor(private setTableStore: SetTableStore, private setTableRowStore: SetTableRowStore, private router: Router) { }

  onEdit(data: [number, SetMode]){

    this.setTableStore.setSetView([...data])
  }

  onDeleteCheck(id: number){
    this.setTableRowStore.enterToDeleteView(id)
  }

  onOpenQuestions(id: number){
    this.router.navigateByUrl(`sets/${id}/questions`)
  }
}
