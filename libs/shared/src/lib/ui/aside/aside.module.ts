import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';
import { AsideLinkDirective } from './aside.directive';

@NgModule({
  declarations: [
    AsideComponent,
    AsideLinkDirective
  ],
  exports: [
    AsideComponent,
    AsideLinkDirective
  ],
  imports: [CommonModule],
})
export class SharedAsideModule {}
