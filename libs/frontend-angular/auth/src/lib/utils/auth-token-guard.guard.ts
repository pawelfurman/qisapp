
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectToken } from '../store/auth.feature';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenGuardGuard implements CanLoad, CanActivate {

  token$: Observable<string> = this.store.select(selectToken)

  constructor(private store: Store, private router: Router){}
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.token$.pipe(
      map((token) => {
        if(token.length){
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }

  canLoad(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    return this.token$.pipe(
      map((token) => {
        if(token.length){
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }


  
}