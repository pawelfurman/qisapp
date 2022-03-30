import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { hideListItem, showListItem } from '@qisapp/shared';
import { Set } from '../../features/sets/sets.types';
import { SetTableStore } from '../../store/set-table.store';

@Component({
  selector: 'fa-set-table',
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
export class SetTableComponent {

  @Input() sets!: Set[];
}
