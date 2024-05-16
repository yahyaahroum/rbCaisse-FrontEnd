import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {IModeOperation} from "./Interfaces/imode-operation";
const AUTH_API = 'api/modeoperation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ModeOperationService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<IModeOperation[]> {
    return this.http.get<IModeOperation[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<IModeOperation>{
    return this.http.get<IModeOperation>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(modeOperation:IModeOperation): Observable<IModeOperation> {
    return this.http.post<IModeOperation>(environment.apiUrl + AUTH_API + '/add', modeOperation, httpOptions);
  }
  update(modeOperation:IModeOperation,id:number):Observable<IModeOperation>{
    return this.http.put<IModeOperation>(environment.apiUrl + AUTH_API +"/update/"+id,modeOperation,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }

}
