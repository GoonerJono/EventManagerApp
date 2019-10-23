import { AppointmentDetails } from './../modules/Appointment/appointmentDetails.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment/appointment.service';
import { Storage } from '@ionic/storage';

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
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.storage.set('AppointmentId', this.id);
    this.appointmentService.GetAppointmentDetails(this.id).subscribe(app => {
     this.appointmentDetails = app;
     console.log(this.appointmentDetails);
     return this.appointmentDetails;
   });

  }

  ViewOrganizationLocation(organisationid: number) {
    this.router.navigate(['view-organisation', { id: organisationid }]);
  }
  Back() {
    this.storage.get('UserId').then((val) => {
      this.storage.remove('AppointmentId');
      this.router.navigate(['details', {id: val}]);
    });
  }

}
