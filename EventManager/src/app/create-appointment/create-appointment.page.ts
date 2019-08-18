import { Organisation } from './../modules/Organization/organisation.module';
import { Consultant } from './../modules/Consultant/consultant.module';
import { ConsultantService } from './../services/consultant/consultant.service';
import { OrganisationService } from './../services/Organisation/organisation.service';
import { AppointmentService } from './../services/appointment/appointment.service';
import { TypeOfService } from './../modules/TypeOfService/typeOfService.module';
import { TypeOfServiceService } from './../services/typeOfService/type-of-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/modules/Appointment/appointment.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.page.html',
  styleUrls: ['./create-appointment.page.scss'],
})
export class CreateAppointmentPage implements OnInit {
organisationid: number;
consultantid: number;
appointment: Appointment = {
  id: undefined,
  ticketNumber: '',
  typeOfService: undefined,
  date: undefined,
  organizationId: undefined,
  userId: undefined,
  consultantId: undefined
};
todaysDate =  Date.now();
typeOfService: TypeOfService[];
organisation: Organisation[];
consultant: Consultant[];

  constructor(
    private router: Router,
    private typeOfServiceService: TypeOfServiceService,
    private appointmentService: AppointmentService,
    private organisationService: OrganisationService,
    private consultantService: ConsultantService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // this.typeOfServiceService.GetTypeOfServices().subscribe(tos => {
    //   console.log(tos);
    //   this.typeOfService = tos;
    // });
    this.consultantService.GetConsultantDetailsOrganizationId(1).subscribe(
      org => {this.consultant = org;
              console.log(this.consultant); });
    // this.organisationService.GetOrganizationsByTypeofService(1).subscribe(
    //   con => {
    //     this.organisation = con;
    //   }
    // );
  }

  CreateAppointment(appointment) {
    console.log(appointment);
    // this.appointmentService.CreateNewAppointment(appointment);
  }

  GetConsultant($event) {
    this.consultantid = $event;
  //   this.consultantService.GetConsultantDetailsOrganizationId($event).subscribe(
  //     org => {this.consultant = org;
  //             console.log(this.consultant); }
  //  );
  }

  GetOrganizations($event) {
   this.organisationid  = $event;
   console.log(this.organisationid);
  //  this.organisationService.GetOrganizationsByTypeofService(this.organisationid).subscribe(
  //     org => {this.organisation = org;
  //             console.log(this.organisation); }
  //  );
  }

}
