import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public af: AngularFire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login ()
  {
    this.navCtrl.push(TabsPage)
  }

  loginFacebook ()
  {
    this.af.auth.login();
  }

}
