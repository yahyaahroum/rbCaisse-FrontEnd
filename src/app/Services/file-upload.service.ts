import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environnements/environment";
import {Ifiles} from "./Interfaces/ifiles";
const AUTH_API = 'api/Files';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private http: HttpClient) { }

   upload(file: File):Observable<any> {

      const formData = new FormData();
      formData.append('file', file);

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      return this.http.post(environment.apiUrl + AUTH_API+'/upload', formData, { headers });
    }

  getFiles(): Observable<any> {
    return this.http.get(environment.apiUrl + AUTH_API+'/files');
  }
  getFilesByDA(id:any):Observable<Ifiles>{
    return this.http.get<Ifiles>(environment.apiUrl + AUTH_API+'/filesByDA/'+id);

  }
  saveFileByIdDa(id:number,file: File):Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    //formData.append('entityData', JSON.stringify(Damandeachat));
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(environment.apiUrl+AUTH_API+'/savePjDaById/'+id, formData, { headers });
  }
  getFileByName(nameFile:string):Observable<any>{
    return this.http.get<any>(environment.apiUrl + AUTH_API+'/files/'+nameFile);
  }
  deleteFile(nameFile:string){

    return this.http.delete(environment.apiUrl + AUTH_API+'/deleteFiles/'+nameFile);
  }
}
