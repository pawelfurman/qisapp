import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve
} from '@angular/router';
import { filter, Observable, take, tap } from 'rxjs';
import { QuestionsService } from './questions.service';
import { QuestionsStore } from './questions.store';

@Injectable()
export class QuestionsResolver implements Resolve<boolean> {

  constructor(private service: QuestionsService, private questionsStore: QuestionsStore){}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.questionsStore.loaded$.pipe(
      tap((loaded) => {
        if(!loaded){
          this.questionsStore.fetchQuestions({setId: Number(route.params['setId']) })
        }
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
