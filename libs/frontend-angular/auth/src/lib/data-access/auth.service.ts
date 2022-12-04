import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUSerLogin } from '@qisapp/api-contract';
import { environment } from '@qisapp/frontend-angular/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login({password}: {password: string}): Observable<ApiUSerLogin>{
    return this.http.post<ApiUSerLogin>(`${environment.api}/login`, {username: 'admin', password})
  }
}
