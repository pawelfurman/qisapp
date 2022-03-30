import { Component, Input, OnInit } from '@angular/core';
import { SetTableStore } from '../../store/set-table.store';

@Component({
  selector: 'fa-set-row-deletion-inability',
  templateUrl: './set-row-deletion-inability.component.html',
  styleUrls: ['./set-row-deletion-inability.component.scss']
})
export class SetRowDeletionInabilityComponent implements OnInit {

  @Input() id!: number

  constructor(private setTableStore: SetTableStore) { }

  ngOnInit(): void {
  }


  confirm(){

    this.setTableStore.setInitialView()

  }

}
