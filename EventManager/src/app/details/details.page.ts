import { TypeOfService } from './../modules/TypeOfService/typeOfService.module';
import { TypeOfServiceService } from './../services/typeOfService/type-of-service.service';
import { Appointment } from './../modules/Appointment/appointment.module';
import { AppointmentService } from './../services/appointment/appointment.service';
import { User } from './../modules/User/user.module';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private typeOfServiceService: TypeOfServiceService ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.appointmentService.GetAppointmentByUserId(this.id).subscribe(app => {
      this.appointment = app;
      console.log(this.appointment);
    });

  }

  CreateAppointment() {
    this.router.navigate(['create-appointment', { id: this.id }]);
  }

}
