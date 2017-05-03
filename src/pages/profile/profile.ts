import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { App } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';

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

  private uid: string;
  private displayName: string;
  private profileImgURL: string;
  private email: string;
  private registered: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App, public af: AngularFire, private _auth: AuthService)
  {
    //Init App With User Profile
    this.af.auth.subscribe(auth => {
      if(auth){
        this.uid = auth.uid;
        this.displayName = auth.facebook.displayName
        this.profileImgURL = auth.facebook.photoURL;
        this.email = auth.facebook.email;
      }
    });
  }

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
    this._auth.signOut()
  }

  showAboutPage()
  {
    this.navCtrl.push(AboutPage);
  }

}
