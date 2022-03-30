import { SetsComponent } from './sets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetsResolver } from './sets.resolver';


const routes: Routes = [{
    path: "",
    component: SetsComponent,
    resolve: {
      sets: SetsResolver
    },
    children: [
      {
        path: ':setId',
        loadChildren: () => import('../questions/questions.module').then(m => m.QuestionsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SetsResolver]
  
})
export class SetsRoutingModule { }
