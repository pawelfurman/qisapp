import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  get question(): Question{
    return this._question
  }

  form: FormGroup = this.fb.group({
    firstValue: [{value: '', disabled: true}],
    secondValue: ['']
  })

  @ViewChild('secondValueField', {static: true}) secondValueField!: ElementRef<HTMLInputElement>

  @Output() checkAnswer:EventEmitter<[string, string]> = new EventEmitter()
  @Output() skipAnswer:EventEmitter<void> = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  submit(){
    const value = this.form.getRawValue()
    this.checkAnswer.emit([value.secondValue, this.question.secondValue])
  }

  skip(){
    this.skipAnswer.emit()
  }

}
