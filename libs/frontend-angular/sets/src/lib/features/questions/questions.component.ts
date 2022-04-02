import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { hideListItem, showListItem } from '@qisapp/shared';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { combineLatest, map } from 'rxjs';
import { QuestionsCreateStore } from '../../data-access/questions/questions-create.store';
import { QuestionsEntitiesStore } from './../../data-access/questions/questions-entities.store';
import { Question } from './questions.types';
@Component({
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('enterLeaveAnimation', [
      transition(':enter',[
        useAnimation(showListItem, {params: {time: '150ms'}})
      ]),
      transition(':leave',[
        useAnimation(hideListItem, {params: {time: '150ms'}})
      ])
    ])
  ],
  providers: [QuestionsCreateStore]
})
export class QuestionsComponent {

  vm$ = combineLatest([
    this.questionsEntitiesStore.entities$,
    this.questionsCreateStore.loading$
  ]).pipe(
    map(([entities, isCreateLoading]) => {
      return {
        entities, isCreateLoading
      }
    })
  )
  
  constructor(
    public config: DynamicDialogConfig,
    private questionsEntitiesStore: QuestionsEntitiesStore,
    private questionsCreateStore: QuestionsCreateStore
  ) { }


  onQuestionCreate(data: Partial<Question>){
    this.questionsCreateStore.createQuestion({setId: this.config.data.setId, ...data} as Question)
  }
}
