import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, filter, skip, tap } from 'rxjs';
import { QuestionsDataStore } from '../../data-access/questions-data.store';

@Component({
  selector: 'fa-question-add-form',
  templateUrl: './question-add-form.component.html',
  styleUrls: ['./question-add-form.component.scss'],
})
export class QuestionAddFormComponent {

  @ViewChild('firstField') firstField!: ElementRef<HTMLInputElement>
  @Input() setId!: number

  form: FormGroup = this.fb.group({
    firstValue: [],
    secondValue: [],
    firstValueCollocation: [],
    secondValueCollocation: [],
    firstValueUsage: [],
    secondValueUsage: [],
  }) 

  isCreateLoading$ = this.questionDataStore.isCreateLoading$
  

  constructor( private fb: FormBuilder, private questionDataStore: QuestionsDataStore) {
    this.questionDataStore.isCreateLoading$.pipe(
      skip(1),
      distinctUntilChanged(),
      filter(item => item === false),
      tap(_ => {
        this.form.reset()
        this.form.enable()
        this.focusOnFirstField()
      })
    ).subscribe()
  }

  addQuestion(){
    if(this.form.valid){
      this.form.disable()
      this.questionDataStore.createQuestion({...this.form.value, setId: this.setId})
    }
  }
  
  reset(){
    this.form.reset()
    this.focusOnFirstField()
  }


  focusOnFirstField(){
    this.firstField.nativeElement.focus()
  }

}
