import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Colour,ColourService } from '../../app/services/colour.service';

import { AuthService } from '../../providers/auth-service';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'addcategory',
  templateUrl: 'addcategory.html',
  providers: [ColourService]
})
export class AddCategoryPage {

  colours: Array<Colour>;
  private uid: string;
  private categoryList: FirebaseListObservable<any>;
  private todo = {};

  constructor(public navCtrl: NavController, private colourService:ColourService, public af: AngularFire, private _auth: AuthService) {
    this.initUserProfile();
    this.initDatabasePath(af);
    this.initColourPicker();
  }

  initUserProfile ()
  {
      this.af.auth.subscribe(auth => {
        this.uid = auth.uid;
      });

      // console.log('User uid : ' + this.uid);
  }

  initDatabasePath (af: AngularFire) : void
  {
    this.categoryList = af.database.list('/users/' + this.uid + '/categories');
  }

  initColourPicker ()
  {
   this.colours = this.colourService.getColourSet();
  }

  gotoHome ()
  {
    this.navCtrl.pop();
  }

  submitCatagory ()
  {
    console.log(this.todo);
    //Save the todo here !
    this.af.database.object('/users/' + this.uid + '/categories/' + this.todo['name']).set({
      name : this.todo['name'],
      colour : this.todo['colour']
    }).then (newCategory => {
      this.gotoHome();
    }, error => {
      console.log(error)
    });
  }

}
