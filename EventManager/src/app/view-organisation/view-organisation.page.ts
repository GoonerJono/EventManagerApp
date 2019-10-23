import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService } from '../services/Organisation/organisation.service';
import { OrganisationDetails } from '../modules/Organization/organisationDetails.module';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-view-organisation',
  templateUrl: './view-organisation.page.html',
  styleUrls: ['./view-organisation.page.scss'],
})
export class ViewOrganisationPage implements OnInit {

  id: number;
  organisation: OrganisationDetails = {
    organizationId: undefined,
    address: '',
    city: '',
    closeTime: undefined,
    email: '',
    isVerified: true,
    latitude: '',
    longitude: '',
    name: '',
    openTime: undefined,
    organizationEndDay: '',
    organizationStartDay: '',
    phoneNumber: '',
    province: '',
    registeredDate: undefined,
    suburb: '',
    typeOfServiceId: undefined
  };

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganisationService,
    private router: Router,
    private storage: Storage) { }

  ngOnInit() {

    this.id = this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.organizationService.GetOrganizationDetails(this.id).subscribe(app => {
      this.organisation = app;
      console.log(this.organisation);
      return this.organisation;
    });


  }

  viewDirections(organisationId: number) {
    this.router.navigate(['view-directions', { id: organisationId }]);
  }
  Back() {
    this.storage.get('AppointmentId').then((val) => {
      console.log('Appointment id from storage: ', val);
      this.router.navigate(['view-appointment', { id: val}]);
    });
  }
}
