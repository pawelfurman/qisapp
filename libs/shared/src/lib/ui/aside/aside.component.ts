import { Component, ContentChildren, QueryList } from '@angular/core';
import { AsideLinkDirective } from './aside.directive';

@Component({
  selector: 'qis-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @ContentChildren(AsideLinkDirective) links!: QueryList<AsideLinkDirective>;
}
