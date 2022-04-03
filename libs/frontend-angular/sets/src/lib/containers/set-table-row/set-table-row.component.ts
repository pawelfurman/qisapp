import { combineLatest, map, combineLatestWith } from 'rxjs';
import { SetsDeleteStore } from './../../data-access/sets/sets-delete.store';


import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Set } from '../../features/sets/sets.types';
import { SetMode, SetTableStore } from '../../store/set-table.store';
import { SetTableRowStore } from '../../store/set-table-row.store';
import { Router } from '@angular/router';
import { SetsUpdateStore } from '../../data-access/sets/sets-update.store';

@Component({
  selector: 'fa-set-table-row',
  templateUrl: './set-table-row.component.html',
  styleUrls: ['./set-table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SetTableRowStore, SetsDeleteStore, SetsUpdateStore]

})
export class SetTableRowComponent {

  private _set!: Set
  @Input() set set(value: Set) {
    this.setTableRowStore.setSetId(value.id)
    this._set = value;
  };  
  get set(){
    return this._set
  }

  vm$ = this.setTableRowStore.vm$.pipe(
    combineLatestWith(
      this.setsDeleteStore.loading$,
      this.setsUpdateStore.loading$
    ),
    map(([vm, isDeleteLoading, isUpdateLoading]) => {
      return {
        ...vm,
        isDeleteLoading,
        isUpdateLoading
      }
    })
  )


  constructor(
    private setTableStore: SetTableStore,
    private setTableRowStore: SetTableRowStore,
    private router: Router,
    private setsDeleteStore: SetsDeleteStore,
    private setsUpdateStore: SetsUpdateStore
  ) { 

   
  }

  onEdit(){

    this.setTableRowStore.setLayout("update")
  }

  onDeleteCheck(id: number){
    this.setTableRowStore.checkDelete(id)
  }

  onOpenQuestions(id: number){
    this.router.navigateByUrl(`sets/${id}/questions`)
  }

  onDeleteConfirm(id: number){
    this.setsDeleteStore.deleteSet(id)
  }

  onDeleteCancel(){
    this.setTableRowStore.setLayout("default")
  }

  onDeleteMessageConfirm(){
    this.setTableRowStore.setLayout("default")
  }

  onEditConfirm(data: {name: string, description: string}){
    this.setsUpdateStore.updateSet({...data, id: this.set.id} as Set)
  }

  onEditCancel(){
    this.setTableRowStore.setLayout("default")
  }
}
