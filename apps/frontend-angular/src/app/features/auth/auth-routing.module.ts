import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginActivationGuard } from './utils/login-activation.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoginActivationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
