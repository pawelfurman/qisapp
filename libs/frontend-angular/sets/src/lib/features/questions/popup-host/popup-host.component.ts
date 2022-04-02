import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { QuestionsEntitiesStore } from '../../../data-access/questions/questions-entities.store';
import { QuestionsComponent } from '../questions.component';

@Component({
  templateUrl: './popup-host.component.html',
  styleUrls: ['./popup-host.component.scss'],
  providers: [DialogService, DynamicDialogRef]
})
export class PopupHostComponent implements OnDestroy {

  private destroy$ = new Subject<void>()

  constructor(private questionsEntitiesStore: QuestionsEntitiesStore, private dialogService: DialogService, public ref: DynamicDialogRef, private router: Router, private route: ActivatedRoute) {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      (params) => {
        const ref = this.dialogService.open(QuestionsComponent, {
          width: '80vw',
          height: '80vh',
          data: {...params},
          header: `Set ${params['setId']} - Questions`
        })
    
    
        ref.onClose.subscribe((_) => {
          this.router.navigateByUrl('/sets')
          this.questionsEntitiesStore.setInitialState()

        })
      }
    )
  }

  ngOnDestroy(){
    this.destroy$.next()
  }

}
