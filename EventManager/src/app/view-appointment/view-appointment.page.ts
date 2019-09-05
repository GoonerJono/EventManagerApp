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
  ticketNumber: string;
  appointment: Appointment;
  user: User = {
    id: undefined,
    birthDate: undefined,
    cellphoneNumber: undefined,
    email: undefined,
    gender: '',
    name: '',
    surname: '',
    password: '',
    username: ''
  };

  organisation: Organisation = {
    id: undefined,
    address: undefined,
    email: undefined,
    hours: '',
    name: '',
    password: '',
    phoneNumber: undefined,
    registeredDate: undefined,
    typeOfServiceId: undefined
  };

  typeOfService: TypeOfService = {
    id: undefined,
    description: '',
    name: ''
  };

  consultant: Consultant = {
    id: undefined,
    name: '',
    email: '',
    dateOfBirth: undefined,
    gender: '',
    organisationId: undefined,
    password: '',
    phoneNumber: undefined,
    surname: '',
    username: ''
  };
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private appointmentService: AppointmentService,
    private router: Router,
    private typeOfServiceService: TypeOfServiceService,
    private organisationService: OrganisationService,
    private consultantService: ConsultantService
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.appointmentService.GetAppointmentByAppointmentId(this.id).subscribe(app => {
     this.Map(app);
     console.log(this.appointment);
     return this.appointment;
   });
  //  this.id = Number(this.route.snapshot.paramMap.get('id'));
  //  this.appointmentService.GetAppointmentByAppointmentId(this.id).subscribe(app => {
  //     this.appointment = app;
  //     console.log(this.appointment);
  //   });
  //  this.consultantService.GetConsultantDetails(this.appointment.consultantId).subscribe(
  //    con => {
  //      this.consultant = con;
  //      console.log(this.consultant);
  //    }
  //  );
  //  this.organisationService.GetOrganizationDetails(this.appointment.organizationId).subscribe(
  //    org => {
  //      this.organisation = org;
  //      console.log(this.organisation);
  //    }
  //  );
  //  this.userService.GetUserDetailsById(this.appointment.userId).subscribe(
  //    urs => {
  //      this.user = urs;
  //      console.log(this.user);
  //    }
  //  );
  //  this.typeOfServiceService.GetTypeOfServiceById(this.appointment.typeOfServiceId).subscribe(
  //    tos => {
  //      this.typeOfService = tos;
  //      console.log(this.typeOfService);
  //    }
  //  );
  }

  Map(app: Appointment) {
    this.appointment = app;
    console.log(this.appointment);
  }

}
