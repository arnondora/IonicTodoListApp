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
    IonicModule.forRoot(MyApp)
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
