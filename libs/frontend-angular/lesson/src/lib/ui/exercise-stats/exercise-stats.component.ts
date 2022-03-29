import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fa-exercise-stats',
  templateUrl: './exercise-stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./exercise-stats.component.scss']
})
export class ExerciseStatsComponent {

  @Input() allQuestions!: number;
  @Input() goodAnswers!: number;
  @Input() wrongAnswers!: number;
  @Input() allTries!: number;
  @Input() allToGuess!: number;
  @Input() progress!: number;
  @Input() effectiveness!: number;

}
