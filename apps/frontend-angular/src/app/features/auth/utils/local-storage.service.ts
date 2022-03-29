import { Injectable } from '@angular/core';
import { UserAuth } from '../store/auth.feature';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }
  public setItem(key: string, value: UserAuth) {
    localStorage.setItem(key, JSON.stringify(value));
  }
    
  public getItem(key: string): string{ 
    return localStorage.getItem(key) || ''
  }
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }
  public clear(){
    localStorage.clear(); 
  }
}