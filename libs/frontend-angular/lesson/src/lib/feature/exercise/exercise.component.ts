import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ExerciseStore } from './exercise.store';

export type ExerciseQueryParams = {
  setIds: string,
  repetition: string,
  incorrectMultiplier: string,
  reverse: string
}

@Component({
  selector: 'fa-page-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExerciseStore]
})
export class PageExerciseComponent implements OnInit {


  questionsLoaded$ = this.exerciseStore.questionsLoaded$
  questionsLoading$ = this.exerciseStore.questionsLoading$

  constructor(public config: DynamicDialogConfig, private exerciseStore: ExerciseStore) { }

  ngOnInit(): void {
    const data: ExerciseQueryParams = this.config.data;

    this.exerciseStore.setConfig({
      setIds: data.setIds.split(',').map(id => Number(id)),
      repetition: Number(data.repetition),
      incorrectMultiplier: Number(data.incorrectMultiplier),
      reverse:data.reverse === 'true' 
    })

    this.exerciseStore.fetchQuestions(data.setIds.split(',').map(id => Number(id)))
  }

}
