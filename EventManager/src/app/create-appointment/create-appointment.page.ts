import { Storage } from '@ionic/storage';
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
import { AlertController } from '@ionic/angular';
import { Province } from '../modules/Province/province.module';
import { ProvinceService } from '../services/province/province.service';


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
  consultant: undefined,
  time: undefined

};
todaysDate =  Date.now();
typeOfService: TypeOfService[];
organisation: Organisation[];
consultant: Consultant[];
province: Province[];

  constructor(
    private router: Router,
    private typeOfServiceService: TypeOfServiceService,
    private appointmentService: AppointmentService,
    private organisationService: OrganisationService,
    private consultantService: ConsultantService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private provinceService: ProvinceService,
    private storage: Storage
    ) { }

  ngOnInit() {
    this.storage.get('UserId').then((val) => {
      console.log(val);
    this.id = val;})
    this.typeOfServiceService.GetTypeOfServices().subscribe(
      TOS => {this.typeOfService = TOS; }
    );
    this.provinceService.GetProvinces().subscribe(
      province => {this.province = province;
                   console.log(province)
      ; }

    );
  }

  CreateAppointment(appointment) {
    appointment.userId = this.id;
    console.log(this.id);
    this.appointmentService.CreateNewAppointment(appointment).subscribe(
      create => {if ( create === 1 ) {
        this.AppointmentCreated();
        this.router.navigate(['details', { id: this.id }]);
      } else if (create === 2) {
        this.AppointmentTimeSlotTaken();
      } else if (create === 3) {
        this.AppointmentOutsideOfBusinessHours();
      }}
    );
  }

  GetConsultant($event) {
    this.consultantid = $event;
    this.consultantService.GetConsultantDetailsOrganizationId($event).subscribe(
      org => {this.consultant = org; }
   );
  }

  GetOrganizations($event) {
   this.organisationid  = $event;
   console.log(this.organisationid);
   this.organisationService.GetOrganizationsByTypeofService(this.organisationid).subscribe(
      org => {this.organisation = org; }
   );
  }

  async AppointmentCreated() {
    const alert = await this.alertController.create({
      header: 'Appointment Created',
      message: 'Appointment was created succesfully',
    });

    await alert.present();
  }

  async AppointmentTimeSlotTaken() {
    const alert = await this.alertController.create({
      header: 'Appointment Not Created',
      message: 'Appointment not created because time slot was taken'
    });

    await alert.present();
  }

  async AppointmentOutsideOfBusinessHours() {
    const alert = await this.alertController.create({
      header: 'Appointment not Created',
      message: 'Appointment not created because the appointment is outside business hours'
    });

    await alert.present();
  }
}
