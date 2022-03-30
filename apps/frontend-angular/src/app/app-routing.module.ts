import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTokenGuardGuard } from '@qisapp/frontend-angular/auth';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    loadChildren: () => import("@qisapp/frontend-angular/auth").then(m => m.FrontendAngularAuthModule),
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
