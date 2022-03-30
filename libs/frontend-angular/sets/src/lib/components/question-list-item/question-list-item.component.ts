import { hideListItem, showListItem } from '@qisapp/shared';
import { trigger, transition, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, InjectionToken, Input, OnInit } from '@angular/core';
import { Question } from '../../features/questions/questions.types';
import { QuestionItemMode, QuestionListItemStore } from './question-list-item.store';

export const CONTEXT_TOKEN = new InjectionToken('edit-context-data')

@Component({
  selector: 'qis-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionListItemStore],
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
export class QuestionListItemComponent implements OnInit {

  private _question!: Question;
  @Input()
  set question(value: Question){
    this.selfStore.setQuestionId(value.id || 0)
    this._question = value
  }
  get question(){
    return this._question
  }

  vm$ = this.selfStore.vm$;

  constructor(private selfStore: QuestionListItemStore) { }

  ngOnInit(): void {
  }



  removeQuestion(){
    this.selfStore.deleteQuestion(this.question.id || 0)
  }


  expand(){
    this.selfStore.setMode("update")
  }

  toggleUpdate(mode: QuestionItemMode){

    this.selfStore.setMode(mode === "default" ? "update":  "default")
  }

}
