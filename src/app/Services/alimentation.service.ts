import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {IAlimentation} from "./Interfaces/ialimentation";
const AUTH_API = 'api/alimentation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AlimentationService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<IAlimentation[]> {
    return this.http.get<IAlimentation[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<IAlimentation>{
    return this.http.get<IAlimentation>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(alimentation:IAlimentation): Observable<IAlimentation> {
    return this.http.post<IAlimentation>(environment.apiUrl + AUTH_API + '/add', alimentation, httpOptions);
  }
  update(alimentation:IAlimentation,id:number):Observable<IAlimentation>{
    return this.http.put<IAlimentation>(environment.apiUrl + AUTH_API +"/update/"+id,alimentation,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }
}
