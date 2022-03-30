import { ShellComponent } from './shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTokenGuardGuard } from '@qisapp/frontend-angular/auth';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    
    children: [
      {
        path: 'exercise',
        loadChildren: () => import('./../exercise/exercise.module').then(m => m.ExerciseModule),
        canLoad: [AuthTokenGuardGuard],
        canActivate: [AuthTokenGuardGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
