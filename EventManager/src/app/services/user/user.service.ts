import { Observable } from 'rxjs';
import { User } from './../../modules/User/user.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

    apiUrl = 'http://dynamicprogrammers.co.za/api/User/';
    apiUrlTest = 'https://localhost:44346/api/User/';

  constructor(private http: HttpClient) { }

  GetUserDetailsById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrlTest + 'GetUserDetails/' + id);
  }

  CreateNewUser(user: User): Observable<number> {
    return this.http.post<number>(this.apiUrlTest, user, httpOptions);
  }
}
