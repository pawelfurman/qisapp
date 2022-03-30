import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Question } from '../../features/questions/questions.types';
import { QuestionListItemStore } from '../question-list-item/question-list-item.store';
import { QuestionEditFormStore } from './question-edit-form.store';

@Component({
  selector: 'fa-question-edit-form',
  templateUrl: './question-edit-form.component.html',
  styleUrls: ['./question-edit-form.component.scss'],
  providers: [QuestionEditFormStore]
})
export class QuestionEditFormComponent implements OnInit {

  @Input() id!: number
  @Input() set question(value:Question){
    this.form.patchValue(value)
  }

  form: FormGroup = this.fb.group({
    firstValue: [],
    secondValue: [],
    firstValueCollocation: [],
    secondValueCollocation: [],
    firstValueUsage: [],
    secondValueUsage: [],
  }) 

  vm$ = this.selfStore.vm$

  constructor(private fb: FormBuilder,  private selfStore: QuestionEditFormStore) { }

  ngOnInit(): void {

  }

  updateQuestion(){
    if(this.form.valid){
      this.selfStore.updateQuestion(this.form.value)
    }

  }

  reset(){

  }

}
