import { TypeOfService } from './../../modules/TypeOfService/typeOfService.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST'})
};

@Injectable({
  providedIn: 'root'
})
export class TypeOfServiceService {

    apiUrl2 = 'http://dynamicprogrammers.co.za/api/TypeOfService/'
    apiurl = 'https://localhost:44346/api/TypeOfService/';

  constructor(private http: HttpClient) { }

  GetTypeOfServices(): Observable<TypeOfService[]> {
    return this.http.get<TypeOfService[]>(this.apiurl);
  }

  GetTypeOfServiceById( typeOfServiceid: number): Observable<TypeOfService> {
    return this.http.get<TypeOfService>(this.apiurl + 'GetTypeOfServiceById' + typeOfServiceid);
  }
}
