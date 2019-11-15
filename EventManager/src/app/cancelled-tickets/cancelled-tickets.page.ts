import { AppointmentDetails } from './../modules/Appointment/appointmentDetails.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { AppointmentService } from '../services/appointment/appointment.service';
import { TypeOfServiceService } from '../services/typeOfService/type-of-service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cancelled-tickets',
  templateUrl: './cancelled-tickets.page.html',
  styleUrls: ['./cancelled-tickets.page.scss'],
})
export class CancelledTicketsPage implements OnInit {
  appointment: AppointmentDetails[];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private appointmentService: AppointmentService,
    private router: Router,
    private typeOfServiceService: TypeOfServiceService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('UserId').then((val) => {
      console.log(val)
      this.appointmentService.GetRejectedAppointmentByUserId(val).subscribe(a => {
        this.appointment = a;
        console.log(this.appointment);
        return this.appointment;
      })
    });
  }

}
