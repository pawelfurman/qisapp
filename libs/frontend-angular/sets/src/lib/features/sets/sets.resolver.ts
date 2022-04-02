import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { filter, Observable, take, tap } from 'rxjs';
import { SetsEntitiesStore } from './../../data-access/sets/sets-entities.store';
import { SetsFetchStore } from './../../data-access/sets/sets-fetch.store';

@Injectable()
export class SetsResolver implements Resolve<boolean> {

  constructor(private setsEntitiesStore: SetsEntitiesStore, private setsFetchStore: SetsFetchStore){}
  
  resolve(): Observable<boolean> {
    return this.setsEntitiesStore.loaded$.pipe(
      tap(loaded => {
        if(!loaded){
          this.setsFetchStore.fetchSets({})
        }
      }),
      filter(loaded => loaded === true),
      take(1)
    )
  }
}
