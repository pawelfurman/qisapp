import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExerciseStore } from '../../feature/exercise/exercise.store';
import { Question } from '../../frontend-angular-lesson.types';

@Component({
  selector: 'fa-exercise-form',
  templateUrl: './exercise-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent {

  private _question!:Question;
  
  @Input() 
  set question(value: Question | undefined){
    if(value?.firstValue){
      this._question = value as Question;
      this.form.get('firstValue')?.setValue(value?.firstValue);
      this.form.get('secondValue')?.reset()
      this.form.get('secondValue')?.setValue('');
      this.secondValueField.nativeElement.focus();
    }else{
      this.form.disable()
    }
  }
  get question(){
    return this._question
  }

  form: FormGroup = this.fb.group({
    firstValue: [{value: '', disabled: true}],
    secondValue: ['']
  })

  @ViewChild('firstValueField', {static: true}) firstValueField!: ElementRef<HTMLInputElement>
  @ViewChild('secondValueField', {static: true}) secondValueField!: ElementRef<HTMLInputElement>

  constructor(private fb: FormBuilder, private exerciseStore: ExerciseStore) { }



  submitAnswer(){
    const value = this.form.getRawValue()


    const firstValue = this.normalizeString(value.firstValue);
    const secondValue = this.normalizeString(value.secondValue);
    const correctFirstValue = this.normalizeString(this.question?.firstValue as string);
    const correctSecondValue = this.normalizeString(this.question?.secondValue as string);

    if(firstValue === correctFirstValue && secondValue === correctSecondValue){
      this.exerciseStore.correctAnswer()
    } else {
      this.exerciseStore.incorrectAnswer()
    }

  }

  normalizeString(word: string){
    return word
      .replace(/ /gi, "")
      .toLowerCase()
      .split(',')
      .sort((a:string,b: string) => a > b ? 1:-1)
      .join(',')
      .normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
  }

  skipQuestion(){
    this.exerciseStore.correctAnswer()
  }

}
