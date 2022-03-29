import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { PageExerciseComponent } from '../exercise.component';

@Component({
  templateUrl: './popup-host.component.html',
  styleUrls: ['./popup-host.component.scss'],
  providers: [DialogService, DynamicDialogRef]
})
export class PopupHostComponent implements OnDestroy {

  private destroy$ = new Subject<void>()

  constructor(private dialogService: DialogService, public ref: DynamicDialogRef, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      (params) => {
        console.log('console.log', params);
 

        const ref = this.dialogService.open(PageExerciseComponent, {
          width: '80vw',
          height: '80vh',
          data: {...params},
          header: `Exercise`
        })
    
    
        ref.onClose.subscribe((_) => {
          this.router.navigateByUrl('/lesson')
          // this.questionsStore.setInitialState()

        })
      }
    )
  }

  ngOnDestroy(){
    this.destroy$.next()
  }

}
