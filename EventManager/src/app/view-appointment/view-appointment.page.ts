import { AppointmentDetails } from './../modules/Appointment/appointmentDetails.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment/appointment.service';

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

  Reload(){
    this.appointmentService.GetAppointmentDetails(this.id).subscribe(app => {
      this.appointmentDetails = app;
      console.log(this.appointmentDetails);
      return this.appointmentDetails;
    });
  }

}
