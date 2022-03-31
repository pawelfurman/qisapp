import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, filter, skip, tap } from 'rxjs';
import { QuestionAddFormStore } from './question-add-form.store';

@Component({
  selector: 'fa-question-add-form',
  templateUrl: './question-add-form.component.html',
  styleUrls: ['./question-add-form.component.scss'],
  providers: [QuestionAddFormStore]
})
export class QuestionAddFormComponent {

  @ViewChild('firstField') firstField!: ElementRef<HTMLInputElement>

  form: FormGroup = this.fb.group({
    firstValue: [],
    secondValue: [],
    firstValueCollocation: [],
    secondValueCollocation: [],
    firstValueUsage: [],
    secondValueUsage: [],
  }) 

  vm$ = this.questionAddFormStore.vm$
  

  constructor( private fb: FormBuilder, private questionAddFormStore: QuestionAddFormStore) {
    this.questionAddFormStore.processing$.pipe(
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
      this.questionAddFormStore.createQuestion(this.form.value)
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
