import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddTodoPage } from '../addtodo/addtodo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private categories: any;

  constructor(public navCtrl: NavController) {
    this.initDumpData();
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
