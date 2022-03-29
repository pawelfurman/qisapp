import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SetTableRowStore } from '../set-table-row/set-table-row.store';
import { SetTableStore } from '../set-table/set-table.store';

@Component({
  selector: 'qis-set-row-default',
  templateUrl: './set-row-default.component.html',
  styleUrls: ['./set-row-default.component.scss']
})
export class SetRowDefaultComponent implements OnDestroy {

  @Input() id!: number;
  @Input() isProcessing!: boolean;
  @Input() name!: string;
  @Input() description!: string;
  
  isDeletePossibilityProcessing$ = this.setTableRowStore.processingDeleteCheck$

  constructor(private setTableStore: SetTableStore, private setTableRowStore: SetTableRowStore, private router: Router) { }


  editSet(){
    this.setTableStore.setSetView([this.id, "edition"])
  
  }

  removeSet(){
  
    this.setTableRowStore.enterToDeleteView(this.id)
  }

  checkDetails(){
    this.router.navigateByUrl(`sets/${this.id}/questions`)
  }

  ngOnDestroy(){}
}
