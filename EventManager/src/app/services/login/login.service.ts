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

    apiUrlTest = 'https://localhost:44346/api/Login/';
    apiUrl = 'http://dynamicprogrammers.co.za/api/Login/';

    constructor(private http: HttpClient) {

    }

    Login(user: User): Observable<number> {
        return this.http.post<number>(this.apiUrlTest, user, httpOptions);
    }
}
