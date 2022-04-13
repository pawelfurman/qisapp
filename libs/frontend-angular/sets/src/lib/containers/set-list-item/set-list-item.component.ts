import { SetsStore } from './../../features/sets/sets.store';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatestWith, map } from 'rxjs';
import { SetsUpdateStore } from '../../data-access/sets/sets-update.store';
import { Set } from '../../features/sets/sets.types';
import { SetListItemStore } from './set-list-item.store';
import { SetsDeleteStore } from '../../data-access/sets/sets-delete.store';



@Component({
  selector: 'fa-set-list-item',
  templateUrl: './set-list-item.component.html',
  styleUrls: ['./set-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SetListItemStore, SetsDeleteStore, SetsUpdateStore]

})
export class SetListItemComponent {


  @Input() set!: Set;

  vm$ = this.setListItemStore.vm$.pipe(
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
    private setListItemStore: SetListItemStore,
    private router: Router,
    private setsDeleteStore: SetsDeleteStore,
    private setsUpdateStore: SetsUpdateStore,
    private setsStore: SetsStore
  ) { 

   
  }

  onEdit(){

    this.setListItemStore.setLayout("update")
  }

  onDeleteCheck(id: number){
    this.setListItemStore.checkDelete(id)
  }

  onOpenQuestions(id: number){
    this.router.navigateByUrl(`sets/${id}/questions`)
  }

  onDeleteConfirm(id: number){
    this.setsDeleteStore.deleteSet(id)
  }

  onDeleteCancel(){
    this.setListItemStore.setLayout("default")
  }

  onDeleteMessageConfirm(){
    this.setListItemStore.setLayout("default")
  }

  onEditConfirm(data: {name: string, description: string}){
    this.setsStore.setAnimationEnabling(false)
    this.setsUpdateStore.updateSet({...data, id: this.set.id} as Set)
  }

  onEditCancel(){
    this.setListItemStore.setLayout("default")
  }
}
