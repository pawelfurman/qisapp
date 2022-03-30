import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { QuestionsStore } from '../questions.store';
import { hideListItem, showListItem } from '@qisapp/shared';
@Component({
  templateUrl: './page-sets-questions.component.html',
  styleUrls: ['./page-sets-questions.component.scss'],
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
export class PageSetsQuestionsComponent implements OnInit {

  questions$ = this.questionStore.entities$
  setId$ = this.questionStore.setId$

  constructor(public config: DynamicDialogConfig, private questionStore: QuestionsStore) { }

  ngOnInit(): void {
    this.questionStore.setSetId(this.config.data.setId)
  }
}
