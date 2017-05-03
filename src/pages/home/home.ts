import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddTodoPage } from '../addtodo/addtodo';

import { AuthService } from '../../providers/auth-service';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private categories: any;
  private uid: string;
  private displayName: string;
  private profileImgURL: string;
  private email: string;

  constructor(public navCtrl: NavController, public af: AngularFire, private _auth: AuthService) {
    //prepare user info
    this.af.auth.subscribe(auth => {
      if(auth){
        this.uid = auth.uid;
        this.displayName = auth.facebook.displayName;
        this.profileImgURL = auth.facebook.photoURL;
        this.email = auth.facebook.email;
      }
    });

    this.initDB();
    this.initDumpData();
  }

  //This Function Create Schema For Each User
  initDB ()
  {
    this.af.database.object('users/' + this.uid).set({
        uid: this.uid,
        name: this.displayName,
        profile: this.profileImgURL,
        registered: Date.now()
    });
  }

  initDumpData ()
  {
    this.categories = [
      {name: 'School', colour: 'lightgreen', todos : [{body: 'Wireless: Assignment 1'},{body: 'DB Design: Project 1'}]},
      {name: 'Home', colour: 'blue', todos : [{body: 'Buy Milk'},{body: 'Buy Dinner'}]},
    ];
  }

  gotoNewTodo ()
  {
    this.navCtrl.push(AddTodoPage);
  }

}
