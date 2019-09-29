import { AppointmentDetails } from './../modules/Appointment/appointmentDetails.module';
import { Consultant } from './../modules/Consultant/consultant.module';
import { TypeOfService } from './../modules/TypeOfService/typeOfService.module';
import { Organisation } from './../modules/Organization/organisation.module';
import { User } from 'src/app/modules/User/user.module';
import { ConsultantService } from './../services/consultant/consultant.service';
import { OrganisationService } from './../services/Organisation/organisation.service';
import { Appointment } from './../modules/Appointment/appointment.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { AppointmentService } from '../services/appointment/appointment.service';
import { TypeOfServiceService } from '../services/typeOfService/type-of-service.service';
import { unescapeIdentifier } from '@angular/compiler';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.page.html',
  styleUrls: ['./view-appointment.page.scss'],
})
export class ViewAppointmentPage implements OnInit {

  id: number;
  appointmentDetails: AppointmentDetails = {
    id: undefined,
    ticketNumber: '',
    date: undefined,
    typeOfServiceName: '',
    organizationName: '',
    userNameSurname: '',
    consultantNameSurname: '',
    organizationId: undefined
  };

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.appointmentService.GetAppointmentDetails(this.id).subscribe(app => {
     this.appointmentDetails = app;
     console.log(this.appointmentDetails);
     return this.appointmentDetails;
   });

  }

  ViewOrganizationLocation(organisationid: number) {
    this.router.navigate(['view-organisation', { id: organisationid }]);
  }

}
