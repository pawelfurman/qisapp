import { SetTableRowStore } from '../set-table-row/set-table-row.store';
import { Component, Input, OnInit } from '@angular/core';
import { SetTableStore } from '../set-table/set-table.store';

@Component({
  selector: 'qis-set-row-deletion',
  templateUrl: './set-row-deletion.component.html',
  styleUrls: ['./set-row-deletion.component.scss']
})
export class SetRowDeletionComponent implements OnInit {

  @Input() id!: number;

  isDeleteProcessing$ = this.setTableRowStore.processingDelete$
  
  constructor(private setTableStore: SetTableStore, private setTableRowStore: SetTableRowStore) { }

  ngOnInit(): void {
  }


  confirmDelete(){
    this.setTableRowStore.deleteSet(this.id)
  }

  rejectDelete(){
    this.setTableStore.setInitialView()
  }



}
