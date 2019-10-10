import { Component } from '@angular/core';
import { User } from '../modules/User/user.module';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private loginService: LoginService, private router: Router,
              public alertController: AlertController) {}

  login(user) {
    console.log(user);
    this.loginService.Login(user).subscribe(r => {
      if (r !== 0) {
        console.log(r);
        this.userLogin();
        this.router.navigate(['details', { id: r }]);
      } else {
        this.usernotFound();
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }

  async usernotFound() {
    const alert = await this.alertController.create({
      header: 'Not Authorised',
      subHeader: 'User is not found in the system',
      message: 'Username or password incorrect, or user does not exist'
    });

    await alert.present();
  }

  async userLogin() {
    const alert = await this.alertController.create({
      header: 'User logged in'
    });

    await alert.present();
  }
}
