import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

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

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public af: AngularFire, private _auth: AuthService) {}

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
    console.log(JSON.parse(this._auth.displayName()));
    this.login();
  }



}
