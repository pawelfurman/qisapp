import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  providers: [SetAddFormStore, SetsCreateStore]
})
export class SetAddFormComponent {

  @ViewChild('form') set formElement(value: ElementRef){
    if(!value){
      this.createForm.reset()
    }
  }

  createForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  })
  
  vm$ = this.setAddFormStore.vm$;


  constructor(private fb: FormBuilder, private setAddFormStore: SetAddFormStore, private setsCreateStore: SetsCreateStore) { }


  createSet(){
    const value: Partial<Set> = this.createForm.value;
    if(this.createForm.valid){
      this.setsCreateStore.createSet(value)
    }
  }


  openCreateForm(){
    this.setAddFormStore.setMode('create')
  }
  cancel(){
    this.setAddFormStore.setMode('default')
  }
}
