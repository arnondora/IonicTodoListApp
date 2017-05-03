import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'addtodo',
  templateUrl: 'addtodo.html'
})
export class AddTodoPage {

  private uid: string;
  private categories : Array<any>;
  private categoryList: FirebaseListObservable<any>;
  private todo = {};

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.initUserProfile();
    this.initCategoryList();
  }

  initUserProfile ()
  {
      this.af.auth.subscribe(auth => {
        this.uid = auth.uid;
      });
  }

  initCategoryList ()
  {
    this.af.database.list('/users/' + this.uid + '/categories', { preserveSnapshot: true})
      .subscribe(snapshots=>{
          this.clearList();
          snapshots.forEach(snapshot => {
            this.categories.push({
              name: snapshot.val()['name']
            });
         });
      });
  }

  clearList ()
  {
    this.categories = Array();
  }

  gotoHome ()
  {
    this.navCtrl.pop();
  }

  submitTodo ()
  {
    //Save the todo here !
  this.af.database.list('/users/' + this.uid + '/categories/' + this.todo['category'] + '/todos').push({
      name : this.todo['name'],
      timestamp: Date.now(),
    }).then (newCategory => {
      this.gotoHome();
    }, error => {
      console.log(error)
    });
  }

}
