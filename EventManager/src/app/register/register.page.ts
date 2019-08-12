import { Component, OnInit } from '@angular/core';
import { User } from '../modules/User/user.module';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = {
    name: '',
    surname: '',
    gender: '',
    email: '',
    cellphoneNumber: undefined,
    birthDate: undefined,
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  create(user) {
    this.userService.CreateNewUser(user).subscribe(r => {console.log(r);
    if(r === 1) {
     this.router.navigate(['']);
    }});
  }
}
