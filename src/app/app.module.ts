import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddTodoPage } from '../pages/addtodo/addtodo';
import { AddCategoryPage } from '../pages/addcategory/addcategory';
import { CategoryHomePage } from '../pages/categoryhome/categoryhome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CategoryPage } from '../pages/category/category';
import { ProfilePage } from '../pages/profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCvKdaWp-011dOOf_i_u0R2CbWzjQLmnlw',
  authDomain: 'todolist-74862.firebaseapp.com',
  databaseURL: 'https://todolist-74862.firebaseio.com',
  storageBucket: 'todolist-74862.appspot.com',
  messagingSenderId: '324758375416'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Redirect
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
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
