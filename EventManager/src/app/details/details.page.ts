import { TypeOfService } from './../modules/TypeOfService/typeOfService.module';
import { TypeOfServiceService } from './../services/typeOfService/type-of-service.service';
import { Appointment } from './../modules/Appointment/appointment.module';
import { AppointmentService } from './../services/appointment/appointment.service';
import { User } from './../modules/User/user.module';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id: number;
  appointment: Appointment[];
  user: User = {
    id: undefined,
    name: '',
    surname: '',
    email: '',
    username: '',
    password: '',
    cellphoneNumber: undefined,
    birthDate: undefined,
    gender: ''
  };

  typeOfService: TypeOfService[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private appointmentService: AppointmentService,
    private router: Router,
    private typeOfServiceService: TypeOfServiceService,
    private storage: Storage,
    private calendar: Calendar,
    private plt: Platform,
    private alertController: AlertController ) { }

  ngOnInit() {
    this.storage.get('UserId').then((val) => {
      console.log(val)
      if(val !== null){
        this.appointmentService.GetAppointmentByUserId(val).subscribe(app => {
          this.appointment = app;
          console.log(this.appointment);
        });
      }else {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.appointmentService.GetAppointmentByUserId(this.id).subscribe(app => {
        this.appointment = app;
        console.log(this.appointment);
      });
      }
    });
  }

  CreateAppointment() {
    this.router.navigate(['create-appointment', { id: this.id }]);
  }

  ViewDetails(id: number) {
    this.storage.set('AppointmentId', id);
    this.router.navigate(['view-appointment', {id}]);
  }

  Logout() {
    this.storage.clear();
    this.router.navigate(['home']);
  }

  AddToCalendar(item: Appointment){
    this.plt.ready().then(() => {
      const options = { calendarId: 1, calendarName: '', url: '', firstReminderMinutes: 15 };
      this.calendar.createEventInteractivelyWithOptions(item.ticketNumber,item.reason,item.ticketNumber,item.date,item.date,options)
      console.log('add to calendar');
    });
  }

  CancelAppointment(id: number) {
    this.appointmentService.RequestAppointmentCancellation(id).subscribe(r => {
      if ( r === 1 ) {
        this.AppointmentCancelled();
      } else {
        this.AppointmentCancelledunsuccessful();
      }
    });
  }

  async AppointmentCancelled() {
    const alert = await this.alertController.create({
      header: 'Appointment cancellation Request',
      message: 'Appointment cancellation Request was sent through succesfully'
    });

    await alert.present();
  }
  async AppointmentCancelledunsuccessful() {
    const alert = await this.alertController.create({
      header: 'Appointment cancellation Request',
      message: 'Appointment cancellation Request was not sent through succesfully'
    });

    await alert.present();
  }

}
