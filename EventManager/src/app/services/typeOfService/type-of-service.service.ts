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

    apiUrl = 'http://dynamicprogrammers.co.za/asp/api/TypeOfService/';
    apiUrlTest = 'https://localhost:44346/api/TypeOfService/';

  constructor(private http: HttpClient) { }

  GetTypeOfServices(): Observable<TypeOfService[]> {
    return this.http.get<TypeOfService[]>(this.apiUrl);
  }

  GetTypeOfServiceById( typeOfServiceid: number): Observable<TypeOfService> {
    return this.http.get<TypeOfService>(this.apiUrl + 'GetTypeOfServiceById' + typeOfServiceid);
  }
}
