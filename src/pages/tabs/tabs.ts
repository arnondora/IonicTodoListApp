import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CategoryPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
