import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {INatureOperation} from "./Interfaces/inature-operation";
const AUTH_API = 'api/natureoperation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class NatureOperationService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<INatureOperation[]> {
    return this.http.get<INatureOperation[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<INatureOperation>{
    return this.http.get<INatureOperation>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(natureOperation:INatureOperation): Observable<INatureOperation> {
    return this.http.post<INatureOperation>(environment.apiUrl + AUTH_API + '/add', natureOperation, httpOptions);
  }
  update(natureOperation:INatureOperation,id:number):Observable<INatureOperation>{
    return this.http.put<INatureOperation>(environment.apiUrl + AUTH_API +"/update/"+id,natureOperation,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }


}
