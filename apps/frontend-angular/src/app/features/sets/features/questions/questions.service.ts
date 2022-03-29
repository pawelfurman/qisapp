import { ApiQuestion } from '@qisapp/api-contract';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class QuestionsService {

    constructor(private http: HttpClient){}

    fetchQuestions(setId: number){
        return this.http.get<ApiQuestion[]>(`http://localhost:3000/sets/${setId}/questions`)
    }

    updateQuestion(setId: number, questionId: number, data: Partial<ApiQuestion>){
        return this.http.put<ApiQuestion>(`http://localhost:3000/sets/${setId}/questions/${questionId}`, data);
    }

    createQuestion(setId: number, data: Partial<ApiQuestion>){
        return this.http.post<ApiQuestion>(`http://localhost:3000/sets/${setId}/questions`, data)
    }

    deleteQuestion(setId: number, questionId: number){
        return this.http.delete<number>(`http://localhost:3000/sets/${setId}/questions/${questionId}`)
    }

}