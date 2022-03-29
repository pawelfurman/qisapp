
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupHostComponent } from './popup-host/popup-host.component';

const routes: Routes = [
    {
        path: '',
        component: PopupHostComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
