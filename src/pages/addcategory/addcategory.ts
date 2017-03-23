import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Colour,ColourService } from '../../app/services/colour.service';

@Component({
  selector: 'addcategory',
  templateUrl: 'addcategory.html',
  providers: [ColourService]
})
export class AddCategoryPage {

  colours: Array<Colour>;

  constructor(public navCtrl: NavController, private colourService:ColourService) {
    this.initColourPicker();
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
    //Save the todo here !
    
    this.gotoHome();
  }

}