import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {IAppartement} from "./Interfaces/iappartement";
const AUTH_API = 'api/appartement';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppartementService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<IAppartement[]> {
    return this.http.get<IAppartement[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<IAppartement>{
    return this.http.get<IAppartement>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(appartement:IAppartement): Observable<IAppartement> {
    return this.http.post<IAppartement>(environment.apiUrl + AUTH_API + '/add', appartement, httpOptions);
  }
  update(appartement:IAppartement,id:number):Observable<IAppartement>{
    return this.http.put<IAppartement>(environment.apiUrl + AUTH_API +"/update/"+id,appartement,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }

}
