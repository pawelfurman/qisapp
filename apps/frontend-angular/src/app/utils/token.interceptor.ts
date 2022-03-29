import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, mergeMap, Observable, take } from 'rxjs';
import { selectToken } from '../features/auth/store/auth.feature';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    
    return this.store.select(selectToken).pipe(
      take(1),
      map(token => {
        return request.clone({
          setHeaders: {
            'Authorization': token
          }
        })
      }),
      mergeMap( request => {
        return next.handle(request)
      })
    )
  }
}
