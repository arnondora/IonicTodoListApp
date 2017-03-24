import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddCategoryPage } from '../addcategory/addcategory';
import { CategoryHomePage } from '../categoryhome/categoryhome';

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
  categories : any;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.initDumpData();
  }

  initDumpData ()
  {
    this.categories = [
      {name : 'School', numItem: 2, colour: "lightgreen"},
      {name : 'Home', numItem: 2, colour: "blue"}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
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
