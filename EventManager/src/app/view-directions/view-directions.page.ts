import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-view-directions',
  templateUrl: './view-directions.page.html',
  styleUrls: ['./view-directions.page.scss'],
})
export class ViewDirectionsPage implements OnInit {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  // @ViewChild('directionsPanel', {static: false}) directionsPanel: ElementRef;
  latitude: any;
  longitude: any;
  map: any;

  constructor(
    private geolocation: Geolocation,
    private plt: Platform) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadMap();
      this.startNavigating();
    });

  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude; });

    const latLng = new google.maps.LatLng(this.latitude, this.longitude);

    const mapOptions = {
      center: latLng,
      curPos: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  startNavigating() {

    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    // directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin: {lat: 37.77, lng: -122.447},
        destination: {lat: 37.768, lng: -122.511},
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });

}

}
