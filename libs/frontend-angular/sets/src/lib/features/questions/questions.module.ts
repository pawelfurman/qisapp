import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionAddFormComponent } from '../../components/question-add-form/question-add-form.component';
import { PageSetsQuestionsComponent } from './page-sets-questions/page-sets-questions.component';
import { QuestionsStore } from './questions.store';
import { QuestionListItemComponent } from '../../components/question-list-item/question-list-item.component';
import { QuestionEditFormComponent } from '../../components/question-edit-form/question-edit-form.component';
import {ChipsModule} from 'primeng/chips';


@NgModule({
  declarations: [
    PageSetsQuestionsComponent,
    QuestionAddFormComponent,
    QuestionListItemComponent,
    QuestionEditFormComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    ChipsModule
  ],
  providers: [QuestionsStore]
})
export class QuestionsModule { 

}
