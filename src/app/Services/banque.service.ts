import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {IBanque} from "./Interfaces/ibanque";
const AUTH_API = 'api/banque';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BanqueService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<IBanque[]> {
    return this.http.get<IBanque[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<IBanque>{
    return this.http.get<IBanque>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(banque:IBanque): Observable<IBanque> {
    return this.http.post<IBanque>(environment.apiUrl + AUTH_API + '/add', banque, httpOptions);
  }
  update(banque:IBanque,id:number):Observable<IBanque>{
    return this.http.put<IBanque>(environment.apiUrl + AUTH_API +"/update/"+id,banque,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
}

}
