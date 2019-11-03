import { Component, OnInit } from '@angular/core';
import { User } from '../modules/User/user.module';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    password: '',
    isVerified: false,
    isActive: false,
    code: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  create(user) {
    this.userService.CreateNewUser(user).subscribe(
      r => {console.log(r);
            if (r === 1) {
      this.Registered();
      this.router.navigate(['']);
    } else if (r === 2 ) {
      this.ExistingUser();
    } else {
      this.NotRegistered();
    }

  });
  }

  Back() {
    this.router.navigate(['']);
  }

  async NotRegistered() {
    const alert = await this.alertController.create({
      header: 'User Registered',
      subHeader: 'User was not created',
      message: 'User not created please try again'
    });

    await alert.present();
  }

  async Registered() {
    const alert = await this.alertController.create({
      header: 'User Registered',
      subHeader: 'User is Registered',
      message: 'User was registered, please verify account before login'
    });

    await alert.present();
  }

  async ExistingUser() {
    const alert = await this.alertController.create({
      header: 'User Registration',
      subHeader: 'User was not Registered',
      message: 'Username and email exist in the system'
    });

    await alert.present();
  }
}
