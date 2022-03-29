import { authFeature } from './store/auth.feature';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './login/login.component'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/auth.effects'
import { ReactiveFormsModule } from '@angular/forms'
import {CardModule} from 'primeng/card'
import {InputTextModule} from 'primeng/inputtext';
import { LogableDirective } from './utils/logable/logable.directive';
import { LoginStore } from './store-component/auth.store';


@NgModule({
  declarations: [
    LoginComponent,
    LogableDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
    InputTextModule
    
  ],
  providers: [LoginStore]
})
export class AuthModule { }
