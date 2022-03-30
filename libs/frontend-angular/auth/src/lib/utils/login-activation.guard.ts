import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { selectToken } from '../store/auth.feature';

@Injectable({
  providedIn: 'root'
})
export class LoginActivationGuard implements CanActivate {

  constructor(private store:Store, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.select(selectToken).pipe(map((token: string) => {

      if(token.length){
        return this.router.createUrlTree(['/', 'dashboard'])
      }


      return true
    }))
  }
  
}
