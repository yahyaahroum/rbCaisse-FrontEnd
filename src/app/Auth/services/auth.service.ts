import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environnements/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const AUTH_API = 'http://localhost:8090/RBCAISSE/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {

    return this.http.post(AUTH_API + '/signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, password: string,nom:string,prenom: string,session: string,sexe: string,rolesUser:string[]): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username, password, nom, prenom,session,sexe,rolesUser});
  }

}
