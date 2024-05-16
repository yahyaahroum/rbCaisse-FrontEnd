import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {IDemandeAlimentation} from "./Interfaces/idemande-alimentation";
const AUTH_API = 'api/demandealimentation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class demandeAlimentationService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<IDemandeAlimentation[]> {
    return this.http.get<IDemandeAlimentation[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<IDemandeAlimentation>{
    return this.http.get<IDemandeAlimentation>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(demandeAlimentation:IDemandeAlimentation): Observable<IDemandeAlimentation> {
    return this.http.post<IDemandeAlimentation>(environment.apiUrl + AUTH_API + '/add', demandeAlimentation, httpOptions);
  }
  update(demandeAlimentation:IDemandeAlimentation,id:number):Observable<IDemandeAlimentation>{
    return this.http.put<IDemandeAlimentation>(environment.apiUrl + AUTH_API +"/update/"+id,demandeAlimentation,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }


}
