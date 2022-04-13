import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { QuestionListItemComponent } from '../../containers/question-list-item/question-list-item.component';
import { QuestionsEntitiesStore } from '../../data-access/questions/questions-entities.store';
import { QuestionsFetchStore } from '../../data-access/questions/questions-fetch.store';
import { QuestionAddFormModule } from '../../ui/question-add-form/question-add-form.module';
import { QuestionModuleFormModule } from '../../ui/question-edit-form/question-module-form.module';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionListItemComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    QuestionAddFormModule,
    QuestionModuleFormModule
  ],
  providers: [QuestionsFetchStore, QuestionsEntitiesStore]
})
export class QuestionsModule {}
