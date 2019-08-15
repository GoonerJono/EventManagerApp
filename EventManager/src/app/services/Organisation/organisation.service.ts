import { Organisation } from './../../modules/Organization/organisation.module';
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
export class OrganisationService {

  apiurl = 'https://localhost:44346/api/Organization/';

  constructor(private http: HttpClient) { }

  GetOrganizationsByTypeofService(typeOfServiceId: number): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(this.apiurl + 'GetOrganizationsByTypeofService/' + typeOfServiceId);
  }
}
