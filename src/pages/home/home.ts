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

    this.initUserProfileDB(af);
    this.initTodos();
  }

  //This Function Create Schema For Each User
  initUserProfileDB (af: AngularFire)
  {
    af.database.list('/users/', { preserveSnapshot: true}).subscribe(snapshots=>{
      if (snapshots.length == 0)
      {
        this.af.database.object('users/' + this.uid).set({
            uid: this.uid,
            name: this.displayName,
            profile: this.profileImgURL,
            registered: Date.now()
        });
      }
    })

  }

  initTodos ()
  {
    //Get Category
    this.af.database.list('/users/' + this.uid + '/categories', { preserveSnapshot: true})
      .subscribe(cats=>{
          this.categories = Array();
          cats.forEach(cat => {

            var todoList = Array();
            //Get todos for each category
            this.af.database.list('/users/' + this.uid + '/categories/' + cat.val()['name'] + '/todos/', { preserveSnapshot: true})
            .subscribe(todos => {
              todos.forEach(todo => {
                todoList.push({body: todo.val()['name']});
              })
            });


            this.categories.push({
              name: cat.val()['name'],
              colour: cat.val()['colour'],
              todos: todoList,
            });


         });
      });
  }

  gotoNewTodo ()
  {
    this.navCtrl.push(AddTodoPage);
  }

}
