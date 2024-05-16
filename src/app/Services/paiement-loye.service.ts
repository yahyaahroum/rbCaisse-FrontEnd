import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {IPaiementLoye} from "./Interfaces/ipaiement-loye";
const AUTH_API = 'api/paiementloye';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PaiementLoyeService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<IPaiementLoye[]> {
    return this.http.get<IPaiementLoye[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<IPaiementLoye>{
    return this.http.get<IPaiementLoye>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(paiementLoye:IPaiementLoye): Observable<IPaiementLoye> {
    return this.http.post<IPaiementLoye>(environment.apiUrl + AUTH_API + '/add', paiementLoye, httpOptions);
  }
  update(paiementLoye:IPaiementLoye,id:number):Observable<IPaiementLoye>{
    return this.http.put<IPaiementLoye>(environment.apiUrl + AUTH_API +"/update/"+id,paiementLoye,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }

}
