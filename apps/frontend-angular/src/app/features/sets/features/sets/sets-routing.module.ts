import { PageSetsComponent } from './page-sets/page-sets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetsResolverResolver } from './sets-resolver.resolver';


const routes: Routes = [{
    path: "",
    component: PageSetsComponent,
    resolve: {
      sets: SetsResolverResolver
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
  providers: [SetsResolverResolver]
  
})
export class SetsRoutingModule { }
