import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question, Set } from '../frontend-angular-lesson.types';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  
  fetchSets(){
    return this.http.get<Set[]>('http://localhost:3000/sets')
  }

  fetchQuestions(setId: number){
    return this.http.get<Question[]>(`http://localhost:3000/sets/${setId}/questions`)
  }

}
