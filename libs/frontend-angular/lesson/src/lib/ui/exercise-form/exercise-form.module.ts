import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ExerciseFormComponent } from './exercise-form.component';


@NgModule({
    declarations: [ExerciseFormComponent],
    imports: [

        CommonModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule
    ],
    exports: [ExerciseFormComponent]
})
export class ExerciseFormModule { }
