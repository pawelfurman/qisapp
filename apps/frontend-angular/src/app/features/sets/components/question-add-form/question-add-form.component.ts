import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { QuestionAddFormStore } from './question-add-form.store';
import { QuestionsStore } from '../../features/questions/questions.store';
import { distinctUntilChanged, filter, tap, finalize, skip } from 'rxjs';

@Component({
  selector: 'qis-question-add-form',
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
