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

  apiurl = 'https://localhost:44346/api/User/';

  constructor(private http: HttpClient) { }

  GetUserDetailsById(id: number) {
    return this.http.get(this.apiurl + id);
  }

  CreateNewUser(user: User) {
    return this.http.post(this.apiurl, user, httpOptions);
  }
}
