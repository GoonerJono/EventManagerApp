import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/modules/User/user.module';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST'})
  };

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    apiurl = 'https://localhost:44346/api/Login/';

    constructor(private http: HttpClient) {

    }

    Login(user: User) {
        return this.http.post(this.apiurl, user, httpOptions);
    }
}
