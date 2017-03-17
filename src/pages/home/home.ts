import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddTodoPage } from '../addtodo/addtodo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoNewTodo ()
  {
    this.navCtrl.push(AddTodoPage);
  }

}
