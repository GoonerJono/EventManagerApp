import { ConsultantService } from './services/consultant/consultant.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule  } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login/login.service';
import { UserService } from './services/user/user.service';
import { AppointmentService } from './services/appointment/appointment.service';
import { TypeOfServiceService } from './services/typeOfService/type-of-service.service';
import { OrganisationService } from './services/Organisation/organisation.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Calendar } from '@ionic-native/calendar/ngx'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Geolocation, LoginService, UserService,
    AppointmentService, TypeOfServiceService, OrganisationService, ConsultantService,CallNumber,Calendar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
