import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve
} from '@angular/router';
import { filter, Observable, take, tap } from 'rxjs';
import { QuestionsEntitiesStore } from '../../data-access/questions/questions-entities.store';
import { QuestionsFetchStore } from '../../data-access/questions/questions-fetch.store';

@Injectable()
export class QuestionsResolver implements Resolve<boolean> {

  constructor(private questionsFetchStore: QuestionsFetchStore, private questionsEntitiesStore: QuestionsEntitiesStore){}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.questionsEntitiesStore.loaded$.pipe(
      tap((loaded) => {
        if(!loaded){
          this.questionsFetchStore.fetchQuestions({setId: Number(route.params['setId']) })
        }
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
