import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Set } from '../features/sets/sets.types';
import { environment } from '@qisapp/frontend-angular/env';

@Injectable({
    providedIn: 'root'
})
export class SetsService {

    constructor(private http: HttpClient){}

    fetchSets(){
        return this.http.get<Set[]>(`${environment.api}/sets`)
    }

    updateSet(setId: number, data: Partial<Set>){
        return this.http.put<Set>(`${environment.api}/sets/${setId}`, data);
    }

    createSet(data: Partial<Set>){
        return this.http.post<Set>(`${environment.api}/sets`, data)
    }

    deleteSet(setId: number){
        return this.http.delete<number>(`${environment.api}/sets/${setId}`)
    }


    deleteCheckSet(setId: number){
        return this.http.get<boolean>(`${environment.api}/sets/${setId}/delete-check`)
    }
}