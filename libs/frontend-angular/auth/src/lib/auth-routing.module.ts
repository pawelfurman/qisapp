import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { LoginActivationGuard } from './utils/login-activation.guard';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    canActivate: [LoginActivationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
