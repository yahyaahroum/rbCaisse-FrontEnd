import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {Ipersonnel} from "./Interfaces/ipersonnel";
const AUTH_API = 'api/employe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<Ipersonnel[]> {
    return this.http.get<Ipersonnel[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<Ipersonnel>{
    return this.http.get<Ipersonnel>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(employe:Ipersonnel): Observable<Ipersonnel> {
    return this.http.post<Ipersonnel>(environment.apiUrl + AUTH_API + '/add', employe, httpOptions);
  }
  update(employe:Ipersonnel,id:number):Observable<Ipersonnel>{
    return this.http.put<Ipersonnel>(environment.apiUrl + AUTH_API +"/update/"+id,employe,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }


}
