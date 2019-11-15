import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService } from '../services/Organisation/organisation.service';
import { OrganisationDetails } from '../modules/Organization/organisationDetails.module';

declare var google;

@Component({
  selector: 'app-view-directions',
  templateUrl: './view-directions.page.html',
  styleUrls: ['./view-directions.page.scss'],
})

export class ViewDirectionsPage implements OnInit, AfterViewInit {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  // @ViewChild('directionsPanel', {static: false}) directionsPanel: ElementRef;
  latitude: any;
  longitude: any;
  latLng: any;
  map: any;
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
    private geolocation: Geolocation,
    private plt: Platform,
    private route: ActivatedRoute,
    private organizationService: OrganisationService,
    private router: Router) {
     }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.organizationService.GetOrganizationDetails(this.id).subscribe(app => {
      this.organisation = app;
      console.log(this.organisation);
      return this.organisation;
    });
  }

 ngAfterViewInit() {
  console.log('this is after screen loads');
  console.log(this.organisation);
  this.loadMap();
 }
  loadMap() {
    console.log('refresh');
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
        this.longitude = pos.coords.longitude;
        this.latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        const infoWindow = new google.maps.InfoWindow;
        const curPos = {
          lat: this.latitude,
          lng: this.longitude
        };
        this.map.setCenter(this.latLng);
        this.map.setZoom(15);

        const directionsService = new google.maps.DirectionsService;
        const directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(this.map);
    // directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        console.log(this.organisation);
        directionsService.route({


        origin: {lat: pos.coords.latitude, lng: pos.coords.longitude},
        destination: this.organisation.address,
        travelMode: google.maps.TravelMode.DRIVING
    }, (res, status) => {

        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });
      });
    });
  }

  Back() {
    this.router.navigate(['view-organisation', { id: this.organisation.organizationId }]);
  }

}
