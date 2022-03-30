import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';
import { QuestionAddFormComponent } from '../../components/question-add-form/question-add-form.component';
import { QuestionEditFormComponent } from '../../components/question-edit-form/question-edit-form.component';
import { QuestionListItemComponent } from '../../components/question-list-item/question-list-item.component';
import { QuestionsStore } from '../../store/questions.store';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';


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
  providers: [QuestionsStore]
})
export class QuestionsModule { 

}
