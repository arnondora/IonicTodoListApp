import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'addtodo',
  templateUrl: 'addtodo.html'
})
export class AddTodoPage {

  constructor(public navCtrl: NavController) {

  }

  gotoHome ()
  {
    this.navCtrl.push(HomePage);
  }

}