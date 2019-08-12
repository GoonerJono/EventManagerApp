import { Component } from '@angular/core';
import { User } from '../modules/User/user.module';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

user: User = {
  username: '',
  password: ''
};

  constructor(private loginService: LoginService) {}

  login(user) {
    console.log(user);
    this.loginService.Login(user).subscribe(r => console.log(r));
  }

}
