import { SetsCreateFormLayout } from './../../store/sets.store';
import { combineLatestWith, map } from 'rxjs';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetsCreateStore } from '../../data-access/sets/sets-create.store';
import { Set } from '../../features/sets/sets.types';
import { SetsStore } from '../../store/sets.store';
import { SetAddFormStore } from './set-add-form.store';

@Component({
  selector: 'fa-set-add-form',
  templateUrl: './set-add-form.component.html',
  styleUrls: ['./set-add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SetAddFormStore]
})
export class SetAddFormComponent {

  private _formNameField!: ElementRef<HTMLInputElement>
  @ViewChild('formNameField') set formNameField(value: ElementRef<HTMLInputElement>){
    if(value){
      this._formNameField = value
      value.nativeElement.focus()
    }
  }
  get formNameField(){
    return this._formNameField
  }
  
  private _loading!: boolean;
  @Input() set loading (value: boolean){
    this._loading = value
    if(!value && this.formNameField){
      this.createForm.reset()
      this.formNameField.nativeElement.focus()
    }
  }
  get loading(){
    return this._loading
  }

  private _layout: SetsCreateFormLayout = "default"
  @Input() set layout(value: SetsCreateFormLayout) {
    this._layout = value;
    if(value === 'default'){
      this.createForm.reset()
    }
  }
  get layout(){
    return this._layout
  }

  @Output() create: EventEmitter<Partial<Set>> = new EventEmitter()
  @Output() toggle: EventEmitter<SetsCreateFormLayout> = new EventEmitter()

  createForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  })
  
  constructor(private fb: FormBuilder) { }

  createSet(){
    const value: Partial<Set> = this.createForm.value;
    if(this.createForm.valid){
      this.create.emit(value)
    }
  }

  open(){
    this.toggle.emit("create")
  }
  cancel(){
    this.toggle.emit("default")
  }
}
