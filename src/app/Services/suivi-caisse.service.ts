import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {ISuiviCaisse} from "./Interfaces/isuivi-caisse";
const AUTH_API = 'api/suivicaisse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SuiviCaisseService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<ISuiviCaisse[]> {
    return this.http.get<ISuiviCaisse[]>(environment.apiUrl + AUTH_API + '/getAll');
  }
  getById(id:number):Observable<ISuiviCaisse>{
    return this.http.get<ISuiviCaisse>(environment.apiUrl + AUTH_API + '/findById/'+id);
  }
  register(suiviCaisse:ISuiviCaisse): Observable<ISuiviCaisse> {
    return this.http.post<ISuiviCaisse>(environment.apiUrl + AUTH_API + '/add', suiviCaisse, httpOptions);
  }
  update(suiviCaisse:ISuiviCaisse,id:number):Observable<ISuiviCaisse>{
    return this.http.put<ISuiviCaisse>(environment.apiUrl + AUTH_API +"/update/"+id,suiviCaisse,httpOptions)
  }
  delete(id:number){
    return this.http.delete(environment.apiUrl + AUTH_API + '/delete/'+id);
  }
  saveFileByIdSuiviCaisse(id:number,file: File):Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(environment.apiUrl+AUTH_API+'/savePjSuiviCaisseById/'+id, formData, { headers });
  }
  upload(file: File):Observable<any> {

    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(environment.apiUrl + AUTH_API+'/upload', formData, { headers });
  }
}
