import { FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonStore } from '../../feature/shell/lesson.store';

@Component({
  selector: 'fa-lesson-creator',
  templateUrl: './lesson-creator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./lesson-creator.component.scss'],
})
export class LessonCreatorComponent implements OnInit {

  sets$ = this.lessonStore.sets$
  questions$ = this.lessonStore.questions$

  constructor(private fb: FormBuilder, private lessonStore: LessonStore, private router: Router) { }

  form = this.fb.group({
    setIds: ['', Validators.required],
    repetition: [2, Validators.required],
    incorrectMultiplier: [2, Validators.required],
    reverse: [true]
  })

  ngOnInit(): void {
    this.lessonStore.fetchSets({})
  }

  submit(){
    if(this.form.valid){
      const value = this.form.value;
      const setIds = value.setIds.join(',');
      const repetition = value.repetition;
      const incorrectMultiplier = value.incorrectMultiplier;
      const reverse = value.reverse;
      this.router.navigate(['lesson/exercise'], {queryParams: {setIds, repetition, incorrectMultiplier, reverse}})
    }
  }
}
