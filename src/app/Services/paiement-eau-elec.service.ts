import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {IPaiementEauElec} from "./Interfaces/ipaiement-eau-elec";
const AUTH_API = 'api/paiementeleceau';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PaiementEauElecService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<IPaiementEauElec[]> {
    return this.http.get<IPaiementEauElec[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<IPaiementEauElec>{
    return this.http.get<IPaiementEauElec>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(paiementEauElec:IPaiementEauElec): Observable<IPaiementEauElec> {
    return this.http.post<IPaiementEauElec>(environment.apiUrl + AUTH_API + '/add', paiementEauElec, httpOptions);
  }
  update(paiementEauElec:IPaiementEauElec,id:number):Observable<IPaiementEauElec>{
    return this.http.put<IPaiementEauElec>(environment.apiUrl + AUTH_API +"/update/"+id,paiementEauElec,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }

}
