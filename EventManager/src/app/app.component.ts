import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage, 
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =
    [
      {
        title : "Home",
        route   : "details",
        icon  : "home"
      },
      {
        title : "Canceled Tickets",
        route   : "cancelled-tickets",
        icon  : "list-box"
      },
      {
        title : "Edit Details",
        route   : "edit-user",
        icon  : "person"
      },
    ]
 }

 MenuItemClick(route: string){
   console.log(route)
   if(route === 'details') {
    this.storage.get('UserId').then((val) => {
      console.log(val)
      this.router.navigate([`${route}`, {val}]);
    });
   }else {
    this.router.navigate([`${route}`]);
   }
  
 }
}
