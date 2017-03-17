import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'addtodo',
  templateUrl: 'addtodo.html'
})
export class AddTodoPage {

  constructor(public navCtrl: NavController) {

  }

  gotoHome ()
  {
    this.navCtrl.pop();
  }

  submitTodo ()
  {
    //Save the todo here !
    
    this.gotoHome();
  }

}