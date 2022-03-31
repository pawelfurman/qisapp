import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from '../../features/questions/questions.types';
import { QuestionsDataStore } from './../../data-access/questions-data.store';

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

  form: FormGroup = this.fb.group({
    firstValue: [],
    secondValue: [],
    firstValueCollocation: [],
    secondValueCollocation: [],
    firstValueUsage: [],
    secondValueUsage: [],
  })

  isUpdateLoading$ = this.questionsDataStore.isUpdateLoading$;


  constructor(private fb: FormBuilder, private questionsDataStore: QuestionsDataStore) { }

  updateQuestion(){
    if(this.form.valid){
      this.questionsDataStore.updateQuestion({...this.form.value, id: this.question.id, setId: this.question.setId})
    }
  }

}
