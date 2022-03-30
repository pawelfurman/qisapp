import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Set } from './sets.types';

@Injectable({
    providedIn: 'root'
})
export class SetsService {

    constructor(private http: HttpClient){}

    fetchSets(){
        return this.http.get<Set[]>('http://localhost:3000/sets')
    }

    updateSet(setId: number, data: Partial<Set>){
        return this.http.put<Set>(`http://localhost:3000/sets/${setId}`, data);
    }

    createSet(data: Partial<Set>){
        return this.http.post<Set>(`http://localhost:3000/sets`, data)
    }

    deleteSet(setId: number){
        return this.http.delete<number>(`http://localhost:3000/sets/${setId}`)
    }


    deleteCheckSet(setId: number){
        return this.http.get<boolean>(`http://localhost:3000/sets/${setId}/delete-check`)
    }
}