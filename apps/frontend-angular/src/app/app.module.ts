import { SharedHeaderModule } from './../../../../libs/shared/src/lib/ui/header/header.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from './app.init';
// import { AuthModule } from './features/auth/auth.module';
import { AuthStoreModule, LocalStorageService, TokenInterceptor } from '@qisapp/frontend-angular/auth';
import { SharedAsideModule } from '@qisapp/shared';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    RouterModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    // AuthModule,
    HttpClientModule,
    AuthStoreModule,
    SharedAsideModule,
    SharedHeaderModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    multi: true,
    deps: [Router, Store, LocalStorageService]
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
