import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Iville} from "./Interfaces/iville";
const AUTH_API = 'api/ville';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class villeService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Iville[]> {
    return this.http.get<Iville[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getvilleById(id:number):Observable<Iville>{
    return this.http.get<Iville>(environment.apiUrl + AUTH_API + '/searchById/'+id);
  }
  updateville(ville:Iville,id:number):Observable<Iville>{
    return this.http.put<Iville>(environment.apiUrl + AUTH_API +"/update/"+id,ville,httpOptions)
  }
  addville(ville:Iville):Observable<Iville>{
    console.log(ville);
    return this.http.post<Iville>(environment.apiUrl + AUTH_API +"/add",ville,httpOptions)
  }

  deleteville(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API +"/delete/"+id)
  }
}
