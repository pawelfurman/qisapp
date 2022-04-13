import { transition, trigger, useAnimation, AnimationEvent } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { hideListItem, showListItem } from '@qisapp/shared';
import { SetsStore } from '../../features/sets/sets.store';
import { Set } from '../../features/sets/sets.types'

@Component({
  selector: 'fa-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterLeaveAnimation', [
      transition(':enter',[
        useAnimation(showListItem, {params: {time: '150ms'}})
      ]),
      transition(':leave',[
        useAnimation(hideListItem, {params: {time: '150ms'}})
      ])
    ]),
  ]
})
export class SetListComponent {

  @Input() sets!: Set[]

  animationEnabling$ = this.setsStore.animationEnabling$

  constructor(private setsStore: SetsStore){}

  captureDoneEvent(event: AnimationEvent){
    if(event.toState === null){
      this.setsStore.setAnimationEnabling(true);
    }
  }
}
