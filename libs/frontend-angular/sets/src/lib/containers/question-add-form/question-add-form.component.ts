import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, filter, skip, tap } from 'rxjs';
import { QuestionsStore } from '../../store/questions.store';
import { QuestionAddFormStore } from './question-add-form.store';

@Component({
  selector: 'fa-question-add-form',
  templateUrl: './question-add-form.component.html',
  styleUrls: ['./question-add-form.component.scss'],
  providers: [QuestionAddFormStore]
})
export class QuestionAddFormComponent implements OnInit {

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
  

  constructor( private fb: FormBuilder, private questionAddFormStore: QuestionAddFormStore, private questionStore: QuestionsStore) {
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

  ngOnInit(): void {

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
