import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { filter, Observable, take, tap } from 'rxjs';
import { SetsStore } from '../../store/sets.store';

@Injectable()
export class SetsResolver implements Resolve<boolean> {

  constructor(private setsStore: SetsStore){}
  
  resolve(): Observable<boolean> {
    return this.setsStore.loaded$.pipe(
      tap(loaded => {
        if(!loaded){
          this.setsStore.fetchSets({})
        }
      }),
      filter(loaded => loaded === true),
      take(1)
    )
  }
}
