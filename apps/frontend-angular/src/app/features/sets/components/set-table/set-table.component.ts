import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Set } from '../../features/sets/sets.types';
import { hideListItem, showListItem } from '../../../../utils/animations';
import { SetTableStore } from './set-table.store';

@Component({
  selector: 'qis-set-table',
  templateUrl: './set-table.component.html',
  styleUrls: ['./set-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SetTableStore],
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
export class SetTableComponent implements OnInit {

  @Input() sets!: Set[];

  constructor() { }

  ngOnInit(): void {
  }
}
