import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve
} from '@angular/router';
import { filter, Observable, take, tap } from 'rxjs';
import { QuestionsDataStore } from '../../data-access/questions-data.store';

@Injectable()
export class QuestionsResolver implements Resolve<boolean> {

  constructor(private questionsDataStore: QuestionsDataStore){}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.questionsDataStore.loaded$.pipe(
      tap((loaded) => {

        console.log('loadide', loaded);
        if(!loaded){
          this.questionsDataStore.fetchQuestions({setId: Number(route.params['setId']) })
        }
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
