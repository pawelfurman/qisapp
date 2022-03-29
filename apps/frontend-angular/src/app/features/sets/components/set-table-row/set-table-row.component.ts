
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Set } from '../../features/sets/sets.types';
import { SetTableStore } from '../set-table/set-table.store';
import { SetTableRowStore } from './set-table-row.store';

@Component({
  selector: 'qis-set-table-row',
  templateUrl: './set-table-row.component.html',
  styleUrls: ['./set-table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SetTableRowStore]

})
export class SetTableRowComponent implements OnInit{

  id!: number
  name!: string
  description!: string


  vm$ = this.setTableRowStore.vm$

  @Input() set set(value: Set) {
    this.setTableRowStore.setSetId(value.id)
    this.name = value.name
    this.description = value.description
  };  

  constructor( private setTableStore: SetTableStore, private setTableRowStore: SetTableRowStore) { }

  ngOnInit(): void {
  }

}
