import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AsideComponent } from './aside/aside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent
  ],
  exports: [
    AsideComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ]
})
export class LayoutModule { }
