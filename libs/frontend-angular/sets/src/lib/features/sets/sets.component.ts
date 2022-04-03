import { Component, OnDestroy } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { SetsCreateStore } from '../../data-access/sets/sets-create.store';
import { SetsEntitiesStore } from '../../data-access/sets/sets-entities.store';
import { SetsCreateFormLayout, SetsStore } from './sets.store';
import { Set } from './sets.types';

@Component({
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss'],
  providers: [SetsCreateStore]
})
export class SetsComponent implements OnDestroy {

  sets$: Observable<Set[] | undefined> = this.setsEntitiesStore.entities$;

  vm$ = combineLatest([
    this.setsEntitiesStore.entities$,
    this.setsCreateStore.loading$,
    this.setsStore.createFormLayout$
  ]).pipe(map(([entities, isCreateLoading, layout]) => {
    return {
      entities,
      isCreateLoading,
      layout
    }
  }))

  constructor(private setsEntitiesStore: SetsEntitiesStore, private setsCreateStore: SetsCreateStore, private setsStore: SetsStore) { }


  onSetCreate(data: Partial<Set>){
    this.setsCreateStore.createSet(data)
  }


  onToggleCreateForm(layout: SetsCreateFormLayout){
    this.setsStore.setCreateFormLayout(layout)
  }

  ngOnDestroy(){
    this.setsEntitiesStore.setInitialState()
  }
}
