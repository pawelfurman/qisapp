import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUSerLogin } from '@qisapp/api-contract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login({password}: {password: string}): Observable<ApiUSerLogin>{
    return this.http.post<ApiUSerLogin>('http://localhost:3000/login', {username: 'admin', password})
  }
}
