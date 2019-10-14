import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Organisation } from './../modules/Organization/organisation.module';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService } from '../services/Organisation/organisation.service';
import { Platform } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-view-organisation',
  templateUrl: './view-organisation.page.html',
  styleUrls: ['./view-organisation.page.scss'],
})
export class ViewOrganisationPage implements OnInit {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;
  latLng: any;
  latitude: any;
  longitude: any;

  id: number;
  organisation: Organisation = {
    id: undefined,
    address: '',
    email: '',
    hours: '',
    name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganisationService,
    private router: Router,
    private plt: Platform,
    private geolocation: Geolocation) { }

  ngOnInit() {

    this.id = this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.organizationService.GetOrganizationDetails(this.id).subscribe(app => {
      this.organisation = app;
      console.log(this.organisation);
      return this.organisation;
    });

    this.plt.ready().then(() => {
      const mapOptions = {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        mapMarker : new google.maps.Marker()
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.geolocation.getCurrentPosition().then(pos => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude
        this.latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        const infoWindow = new google.maps.InfoWindow;
        const curPos = {
          lat: this.latitude,
          lng: this.longitude
        };
        infoWindow.setPosition(curPos);
        infoWindow.open(this.map);
        this.map.setCenter(this.latLng);
        this.map.setZoom(15);
      });
    });
  }

  viewDirections(organisationId : number) {
    this.router.navigate(['view-directions', { id: organisationId }]);
  }
}
