import { Storage } from '@ionic/storage';
import { User } from 'src/app/modules/User/user.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { AppointmentService } from '../services/appointment/appointment.service';
import { TypeOfServiceService } from '../services/typeOfService/type-of-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
 user: User;
 id: number;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private appointmentService: AppointmentService,
    private router: Router,
    private typeOfServiceService: TypeOfServiceService,
    private storage: Storage,
    private alertController: AlertController) { }

  ngOnInit() {
    this.storage.get('UserId').then((val) => {
      this.id = val
      this.userService.GetUserDetailsById(val).subscribe(a => {
        this.user = a;
      })
    });
  }

  UpdateUser(user: User){
    this.userService.UpdateUser(user).subscribe(a => {
      if(a === 1) {
        this.UserDetailsUpdated();
        this.router.navigate(['details', { id: this.id }]);
      }else {
        this.UserDetailsNotUpdated();
      }
      console.log(a);
    })
  } 

  async UserDetailsUpdated() {
    const alert = await this.alertController.create({
      header: 'Details Updated',
      message: 'The user details were updated',
    });

    await alert.present();
  }

  async UserDetailsNotUpdated() {
    const alert = await this.alertController.create({
      header: 'Details Not Updated',
      message: 'User Details were not updated',
    });

    await alert.present();
  }
}
