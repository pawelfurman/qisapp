import { ApiQuestion } from '@qisapp/api-contract';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '@qisapp/frontend-angular/env';

@Injectable({
    providedIn: 'root'
})
export class QuestionsService {

    constructor(private http: HttpClient){}

    fetchQuestions(setId: number){
        return this.http.get<ApiQuestion[]>(`${environment.api}/sets/${setId}/questions`)
    }

    updateQuestion(setId: number, questionId: number, data: Partial<ApiQuestion>){
        return this.http.put<ApiQuestion>(`${environment.api}/sets/${setId}/questions/${questionId}`, data);
    }

    createQuestion(setId: number, data: Partial<ApiQuestion>){
        return this.http.post<ApiQuestion>(`${environment.api}/sets/${setId}/questions`, data)
    }

    deleteQuestion(setId: number, questionId: number){
        return this.http.delete<number>(`${environment.api}/sets/${setId}/questions/${questionId}`)
    }

}