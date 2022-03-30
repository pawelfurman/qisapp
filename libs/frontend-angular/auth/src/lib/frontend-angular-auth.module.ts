import { authFeature } from './store/auth.feature';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthRoutingModule } from './auth-routing.module'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/auth.effects'
import { ReactiveFormsModule } from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext';
import { LoginStore } from './store-component/auth.store';
import { LoginComponent } from './feature/login/login.component';



@NgModule({
  declarations: [
    LoginComponent
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
export class FrontendAngularAuthModule {}
