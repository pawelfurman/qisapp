import { SetsStore } from './sets.store';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, filter, Observable, of, take, tap } from 'rxjs';

@Injectable()
export class SetsResolverResolver implements Resolve<boolean> {

  constructor(private setsStore: SetsStore){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
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
