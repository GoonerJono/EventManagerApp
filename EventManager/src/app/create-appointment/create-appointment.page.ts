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
id: number;
organisationid: number;
consultantid: number;
appointment: Appointment = {
  id: undefined,
  ticketNumber: '',
  typeOfServiceId: undefined,
  date: undefined,
  organizationId: undefined,
  userId: undefined,
  consultantId: undefined,
  user: undefined,
  organization: undefined,
  consultant: undefined

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
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.typeOfServiceService.GetTypeOfServices().subscribe(
      TOS => {this.typeOfService = TOS; }
    );
  }

  CreateAppointment(appointment) {
    appointment.userId = this.id;
    console.log(this.id);
    console.log(appointment);
    this.appointmentService.CreateNewAppointment(appointment).subscribe(
      create => {if ( create === 1 ) {
        this.router.navigate(['details', { id: this.id }]);
      }}
    );
    // this.router.navigate(['details', { id: this.id }]);
  }

  GetConsultant($event) {
    this.consultantid = $event;
    this.consultantService.GetConsultantDetailsOrganizationId($event).subscribe(
      org => {this.consultant = org;
              console.log(this.consultant); }
   );
  }

  GetOrganizations($event) {
   this.organisationid  = $event;
   console.log(this.organisationid);
   this.organisationService.GetOrganizationsByTypeofService(this.organisationid).subscribe(
      org => {this.organisation = org;
              console.log(this.organisation); }
   );
  }

}
