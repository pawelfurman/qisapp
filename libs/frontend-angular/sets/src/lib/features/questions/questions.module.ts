import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';
import { QuestionAddFormComponent } from '../../containers/question-add-form/question-add-form.component';
import { QuestionEditFormComponent } from '../../containers/question-edit-form/question-edit-form.component';
import { QuestionListItemComponent } from '../../containers/question-list-item/question-list-item.component';
import { QuestionsStore } from '../../store/questions.store';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsDataStore } from '../../data-access/questions-data.store';


@NgModule({
  declarations: [
    QuestionsComponent,
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
  providers: [QuestionsStore, QuestionsDataStore]
})
export class QuestionsModule { 

}
