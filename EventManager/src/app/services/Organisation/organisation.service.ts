import { Organisation } from './../../modules/Organization/organisation.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganisationDetails } from 'src/app/modules/Organization/organizationdetails.module';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST'})
};

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

    apiUrl = 'http://dynamicprogrammers.co.za/api/Organization/';
    apiUrlTest = 'https://localhost:44346/api/Organization/';

  constructor(private http: HttpClient) { }

  GetOrganizationsByTypeofService(typeOfServiceId: number): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(this.apiUrlTest + 'GetOrganizationsByTypeofService/' + typeOfServiceId);
  }

  GetOrganizationDetails(organisationId: number): Observable<OrganisationDetails> {
    return this.http.get<OrganisationDetails>(this.apiUrlTest + 'GetOrganizationDetails/' + organisationId);
  }
}
