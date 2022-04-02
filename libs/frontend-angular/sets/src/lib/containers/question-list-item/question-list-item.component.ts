import { QuestionsUpdateStore } from './../../data-access/questions/questions-update.store';
import { QuestionDeleteState, QuestionsDeleteStore } from './../../data-access/questions/questions-delete.store';
import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, InjectionToken, Input } from '@angular/core';
import { hideListItem, showListItem } from '@qisapp/shared';
import { combineLatestWith, map, of } from 'rxjs';
import { Question } from '../../features/questions/questions.types';
import { QuestionListItemStore } from './question-list-item.store';

export const CONTEXT_TOKEN = new InjectionToken('edit-context-data')

@Component({
  selector: 'fa-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionListItemStore, QuestionsDeleteStore, QuestionsUpdateStore],
  animations: [
    trigger('enterLeaveAnimation', [
      transition(':enter',[
        useAnimation(showListItem, {params: {time: '150ms'}})
      ]),
      transition(':leave',[
        useAnimation(hideListItem, {params: {time: '150ms'}})
      ])
    ])
  ]
})
export class QuestionListItemComponent {

  private _question!: Question;
  @Input()
  set question(value: Question){
    this._question = value
  }
  get question(){
    return this._question
  }

  vm$ = this.selfStore.vm$.pipe(
    combineLatestWith(
      this.questionsUpdateStore.loading$,
      this.questionsDeleteStore.loading$
    ),
    map( ([vm, isUpdateLoading, isDeleteLoading]) => ({
      ...vm,
      isUpdateLoading,
      isDeleteLoading
    }))
  );

  constructor(private selfStore: QuestionListItemStore, private questionsDeleteStore: QuestionsDeleteStore, private questionsUpdateStore: QuestionsUpdateStore) { }

  removeQuestion(){
    this.questionsDeleteStore.deleteQuestion({questionId: this.question.id, setId: this.question.setId})
  }

  onUpdateQuestion(data: Partial<Question>){
    this.questionsUpdateStore.updateQuestion(data as Question);
  }


  expand(){
    this.selfStore.setMode("update")
  }

  toggleUpdate(isUpdateMode: boolean){
    this.selfStore.setMode(isUpdateMode ? "default":  "update")
  }

}
