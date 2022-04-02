import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { Question } from '../../features/questions/questions.types';

@Component({
  selector: 'fa-question-edit-form',
  templateUrl: './question-edit-form.component.html',
  styleUrls: ['./question-edit-form.component.scss'],
  providers: []
})
export class QuestionEditFormComponent {

  private _question!: Question
  @Input() id!: number
  @Input() set question(value:Question){
    this._question = value
    this.form.patchValue(value)
  }
  get question() {
    return this._question
  }
  @Input() isLoading!: boolean

  @Output() update: EventEmitter<Partial<Question>> = new EventEmitter()

  form: FormGroup = this.fb.group({
    firstValue: [],
    secondValue: [],
    firstValueCollocation: [],
    secondValueCollocation: [],
    firstValueUsage: [],
    secondValueUsage: [],
  })

  constructor(private fb: FormBuilder) { }

  updateQuestion(){
    if(this.form.valid){
      this.update.emit({...this.form.value, id: this.question.id, setId: this.question.setId})
    }
  }

}
