import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTokenGuardGuard } from './features/auth/utils/auth-token-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [AuthTokenGuardGuard],
    canActivate: [AuthTokenGuardGuard]
  },
  {
    path: 'sets',
    loadChildren: () => import('./features/sets/features/sets/sets.module').then(m => m.SetsModule),
    canLoad: [AuthTokenGuardGuard],
    canActivate: [AuthTokenGuardGuard]
  },
  {
    path: 'exam',
    loadChildren: () => import('./features/exam/exam.module').then(m => m.ExamModule),
    canLoad: [AuthTokenGuardGuard],
    canActivate: [AuthTokenGuardGuard]
  },
  {
    path: 'lesson',
    loadChildren: () => import('@qisapp/frontend-angular/lesson').then(m => m.FrontendAngularLessonModule),
    canLoad: [AuthTokenGuardGuard],
    canActivate: [AuthTokenGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
