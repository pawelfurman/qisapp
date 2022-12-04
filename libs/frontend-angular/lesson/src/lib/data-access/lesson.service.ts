import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@qisapp/frontend-angular/env';
import { Question, Set } from '../frontend-angular-lesson.types';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  
  fetchSets(){
    return this.http.get<Set[]>(`${environment.api}/sets`)
  }

  fetchQuestions(setId: number){
    return this.http.get<Question[]>(`${environment.api}/sets/${setId}/questions`)
  }

}
