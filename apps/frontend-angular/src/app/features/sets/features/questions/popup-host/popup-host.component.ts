import { finalize, Subject, takeUntil } from 'rxjs';
import { PageSetsQuestionsComponent } from '../page-sets-questions/page-sets-questions.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsStore } from '../questions.store';

@Component({
  templateUrl: './popup-host.component.html',
  styleUrls: ['./popup-host.component.scss'],
  providers: [DialogService, DynamicDialogRef]
})
export class PopupHostComponent implements OnDestroy {

  private destroy$ = new Subject<void>()

  constructor(private questionsStore: QuestionsStore, private dialogService: DialogService, public ref: DynamicDialogRef, private router: Router, private route: ActivatedRoute) {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      (params) => {
        const ref = this.dialogService.open(PageSetsQuestionsComponent, {
          width: '80vw',
          height: '80vh',
          data: {...params},
          header: `Set ${params['setId']} - Questions`
        })
    
    
        ref.onClose.subscribe((_) => {
          this.router.navigateByUrl('/sets')
          this.questionsStore.setInitialState()

        })
      }
    )
  }

  ngOnDestroy(){
    this.destroy$.next()
  }

}
