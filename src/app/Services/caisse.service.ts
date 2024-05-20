import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {ICaisse} from "./Interfaces/icaisse";
import {Iuser} from "./Interfaces/iuser";
const AUTH_API = 'api/caisse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CaisseService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<ICaisse[]> {
    return this.http.get<ICaisse[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<ICaisse>{
    return this.http.get<ICaisse>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(caisse:ICaisse): Observable<ICaisse> {
    return this.http.post<ICaisse>(environment.apiUrl + AUTH_API + '/add', caisse, httpOptions);
  }
  update(caisse:ICaisse,id:number):Observable<ICaisse>{
    return this.http.put<ICaisse>(environment.apiUrl + AUTH_API +"/update/"+id,caisse,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }
  caissesByUser(id:number): Observable<ICaisse[]>{
    return this.http.get<ICaisse[]>(environment.apiUrl + AUTH_API + '/caissesByUser/'+id);
  }

}
