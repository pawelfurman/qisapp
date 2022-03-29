import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login({password}: {password: string}): Observable<any>{
    return this.http.post<any>('http://localhost:3000/login', {username: 'admin', password})
  }
}
