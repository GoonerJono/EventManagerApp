import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultant } from 'src/app/modules/Consultant/consultant.module';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST'})
};

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  apiurl = 'https://localhost:44346/api/consultant/';

  constructor(private http: HttpClient) { }

  GetConsultantDetailsOrganizationId(organisationId: number): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(this.apiurl + 'GetConsultantDetailsOrganizationId/' + organisationId);
  }
}
