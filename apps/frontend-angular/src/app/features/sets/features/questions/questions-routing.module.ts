import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupHostComponent } from './popup-host/popup-host.component';
import { QuestionsResolver } from './questions.resolver';

const routes: Routes = [{
  path: "questions",
  component: PopupHostComponent,
  resolve: {
    data: QuestionsResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [QuestionsResolver]
})
export class QuestionsRoutingModule { }
