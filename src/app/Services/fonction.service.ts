import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IfonctionEmploye} from "./Interfaces/ifonctionEmploye";
import {environment} from "../../environnements/environment";
const AUTH_API = 'api/fonction';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FonctionService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<IfonctionEmploye[]> {
    return this.http.get<IfonctionEmploye[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<IfonctionEmploye>{
    return this.http.get<IfonctionEmploye>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(fonction:IfonctionEmploye): Observable<IfonctionEmploye> {
    return this.http.post<IfonctionEmploye>(environment.apiUrl + AUTH_API + '/add', fonction, httpOptions);
  }
  update(fonction:IfonctionEmploye, id:number):Observable<IfonctionEmploye>{
    return this.http.put<IfonctionEmploye>(environment.apiUrl + AUTH_API +"/update/"+id,fonction,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
}

}
