import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { hideListItem, showListItem } from '@qisapp/shared';
import { QuestionsStore } from '../../store/questions.store';
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
  ]
})
export class QuestionsComponent implements OnInit {

  questions$ = this.questionStore.entities$
  setId$ = this.questionStore.setId$

  constructor(public config: DynamicDialogConfig, private questionStore: QuestionsStore) { }

  ngOnInit(): void {
    this.questionStore.setSetId(this.config.data.setId)
  }
}
