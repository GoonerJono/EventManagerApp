import { Province } from '../../modules/Province/province.module';
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
export class ProvinceService {

  apiurl = 'https://localhost:44346/api/Province/';

  constructor(private http: HttpClient) { }

  GetProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(this.apiurl + 'GetProvinces/');
  }

  GetProvinceById( provinceId: number): Observable<Province> {
    return this.http.get<Province>(this.apiurl + 'GetProvinceById/' + provinceId);
  }
}
