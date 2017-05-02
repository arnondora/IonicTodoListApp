import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddTodoPage } from '../pages/addtodo/addtodo';
import { AddCategoryPage } from '../pages/addcategory/addcategory';
import { CategoryHomePage } from '../pages/categoryhome/categoryhome';
import { LoginPage } from '../pages/login/login';
import { CategoryPage } from '../pages/category/category';
import { ProfilePage } from '../pages/profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from 'angularfire2';
import { AuthService } from '../providers/auth-service';

export const firebaseConfig = {
  apiKey: 'AIzaSyCvKdaWp-011dOOf_i_u0R2CbWzjQLmnlw',
  authDomain: 'todolist-74862.firebaseapp.com',
  databaseURL: 'https://todolist-74862.firebaseio.com',
  storageBucket: 'todolist-74862.appspot.com',
  messagingSenderId: '324758375416'
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddTodoPage,
    AddCategoryPage,
    CategoryHomePage,
    LoginPage,
    CategoryPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddTodoPage,
    AddCategoryPage,
    CategoryHomePage,
    LoginPage,
    CategoryPage,
    ProfilePage
  ],
  providers: [AuthService]
})
export class AppModule {}
