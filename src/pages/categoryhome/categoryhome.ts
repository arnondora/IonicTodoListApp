import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire} from 'angularfire2';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-home',
  templateUrl: 'categoryhome.html'
})
export class CategoryHomePage {
  private catName:String;
  private catColour:String;
  private todos: Array<any>;
  private uid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire)
  {
    //Get Data From Previous Page
    this.catName = navParams.get('name').charAt(0).toUpperCase() + navParams.get('name').slice(1);
    this.catColour = navParams.get('colour');

    this.initUserProfile();
    this.initDataFromDB();
  }

  //Page Life Cycle
  ionViewDidLoad() {
    console.log(this.catName + ' Page has been loaded');
  }


  initUserProfile ()
  {
      this.af.auth.subscribe(auth => {
        this.uid = auth.uid;
      });
  }

  initDataFromDB ()
  {
    this.af.database.list('/users/' + this.uid + '/categories/' + this.catName + '/todos', { preserveSnapshot: true})
      .subscribe(snapshots=>{
          this.clearList();
          snapshots.forEach(snapshot => {
            this.todos.push({
              body: snapshot.val()['name'],
              category: this.catName,
              uid: snapshot.key,
            });
         });
      });
  }

  clearList ()
  {
    this.todos = Array();
  }

  initDumpData ()
  {
    this.todos = [
      {body: "Buy Milk" , category : "Home"},
      {body: "Buy Dinner", category: "Home"}
    ];
  }

  deleteTodo (CatName: string, itemUid: string)
  {
    console.log(CatName + " " + itemUid);
    this.af.database.list('/users/' + this.uid + '/categories/' + CatName + '/todos/' + itemUid).remove();
  }

}
