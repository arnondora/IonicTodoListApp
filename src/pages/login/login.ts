import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private _auth: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login ()
  {
    this.navCtrl.push(TabsPage)
  }

  signInWithFacebook(): void
  {
  this._auth.signInWithFacebook()
    .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void
  {
    this.login();
  }



}
