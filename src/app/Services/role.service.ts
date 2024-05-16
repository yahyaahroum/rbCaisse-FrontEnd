import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
const AUTH_API = 'api/role';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {
  }
  getAllRoles(): Observable<any> {
    return this.http.get(environment.apiUrl + AUTH_API + '/ListeRoles');
  }

  getRoleByName(name: string):Observable<any>{
    return this.http.get<any>(environment.apiUrl + AUTH_API + '/roleByUserName/' + name, httpOptions);
  }
}
