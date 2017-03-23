import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  private todos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.catName = navParams.get('name').charAt(0).toUpperCase() + navParams.get('name').slice(1);
    this.initDumpData();
  }

  initDumpData ()
  {
    this.todos = [
      {body: "Buy Milk" , category : "Home"},
      {body: "Buy Dinner", category: "Home"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}