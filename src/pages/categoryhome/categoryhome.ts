import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public af: AngularFire)
  {
    //Get Data From Previous Page
    this.catName = navParams.get('name').charAt(0).toUpperCase() + navParams.get('name').slice(1);
    this.catColour = navParams.get('colour');

    this.initUserProfile();
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

  deleteTodo (CatName: string, itemUid: string)
  {
    console.log(CatName + " " + itemUid);
    this.af.database.list('/users/' + this.uid + '/categories/' + CatName + '/todos/' + itemUid).remove();
  }

  deleteCategoryPrompt(CatName: string) {
    let confirm = this.alertCtrl.create({
      title: 'Delete Category',
      message: 'All Todos inside this category will be deleted, this operation cannot be undone. Are you sure to delete ' + CatName +'?',
      buttons: [
        {
          text: 'Yes I am sure!',
          handler: () => {
            this.deleteCategory(CatName);
            this.navCtrl.pop();
          }
        },
        {
          text: 'No I am not',
          handler: () => {
            //Do Nothing
          }
        }
      ]
    });
    confirm.present();
  }

  deleteCategory(CatName: string)
  {
    this.af.database.list('/users/' + this.uid + '/categories').remove(CatName);
  }

}
