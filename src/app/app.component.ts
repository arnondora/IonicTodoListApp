import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ColourService} from './services/colour.service';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any

  constructor(platform: Platform, af: AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      const authObserver = af.auth.subscribe( user => {
        if (user)
        {
          this.rootPage = TabsPage;
          authObserver.unsubscribe();
        } else
        {
          this.rootPage = LoginPage;
          authObserver.unsubscribe();
        }
      });
    });
  }
}
