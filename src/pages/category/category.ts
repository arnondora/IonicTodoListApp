import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddCategoryPage } from '../addcategory/addcategory';
import { CategoryHomePage } from '../categoryhome/categoryhome';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  private categories : Array<any>;
  private uid: string;
  private categoryList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire)
  {
    this.initUserProfile();
    this.initDatabasePath(af);
    this.initDataFromDB();
  }

  initUserProfile ()
  {
      this.af.auth.subscribe(auth => {
        this.uid = auth.uid;
      });
  }

  initDataFromDB ()
  {
    this.af.database.list('/users/' + this.uid + '/categories', { preserveSnapshot: true})
      .subscribe(snapshots=>{
          this.clearList();
          snapshots.forEach(snapshot => {
            this.categories.push({
              name: snapshot.val()['name'],
              colour: snapshot.val()['colour']
            });
         });
      });
  }

  clearList ()
  {
    this.categories = Array();
  }

  initDatabasePath (af: AngularFire) : void
  {
    this.categoryList = af.database.list('/users/' + this.uid + '/categories');
  }

  showNewCategory()
  {
    this.navCtrl.push(AddCategoryPage);
  }

  showCategoryDetail (name:string, colour:string)
  {
    this.navCtrl.push(CategoryHomePage, {
      name : name,
      colour: colour
    });
  }

}
