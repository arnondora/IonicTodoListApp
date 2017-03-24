import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { App } from 'ionic-angular';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout ()
  {
    this.logUserOut ();
    this.app.getRootNav().setRoot(LoginPage);
  }

  logUserOut()
  {

  }
  
  showAboutPage()
  {
    this.navCtrl.push(AboutPage);
  }

}
