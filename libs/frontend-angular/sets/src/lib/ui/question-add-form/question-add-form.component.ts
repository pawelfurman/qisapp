import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from '../../features/questions/questions.types';

@Component({
  selector: 'fa-question-add-form',
  templateUrl: './question-add-form.component.html',
  styleUrls: ['./question-add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAddFormComponent {

  private _isLoading = false;

  @ViewChild('firstField') firstField!: ElementRef<HTMLInputElement>
  @Input() set isLoading(value: boolean){
    this._isLoading = value;
    if(!value && this.firstField){
      this.form.reset()
      this.form.enable()
      this.focusOnFirstField()
    }
  }
  get isLoading(){
    return this._isLoading
  }

  @Output() create: EventEmitter<Partial<Question>> = new EventEmitter()

  form: FormGroup = this.fb.group({
    firstValue: [],
    secondValue: [],
    firstValueCollocation: [],
    secondValueCollocation: [],
    firstValueUsage: [],
    secondValueUsage: [],
  }) 

  constructor( private fb: FormBuilder) {}

  addQuestion(){
    if(this.form.valid){
      this.form.disable()
      this.create.emit({...this.form.value})
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
