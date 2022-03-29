
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { selectToken } from '../store/auth.feature';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenGuardGuard implements CanLoad, CanActivate {

  token$: Observable<string> = this.store.select(selectToken)

  constructor(private store: Store, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.token$.pipe(
      map((token) => {
        if(token.length){
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
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