import { Observable } from 'rxjs';
import { User } from './../../modules/User/user.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST'})
};

const httpOptions2 = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'PUT'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

    apiUrl = 'http://dynamicprogrammers.co.za/asp/api/User/';
    apiUrlTest = 'https://localhost:44346/api/User/';

  constructor(private http: HttpClient) { }

  GetUserDetailsById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + 'GetUserDetails/' + id);
  }

  CreateNewUser(user: User): Observable<number> {
    return this.http.post<number>(this.apiUrl, user, httpOptions);
  }

  UpdateUser(user: User): Observable<number> {
    return this.http.put<number>(this.apiUrl + 'UpdateUser/', user, httpOptions);
  }
}
