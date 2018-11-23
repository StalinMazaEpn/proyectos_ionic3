import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrarProductoPage } from '../pages/registrar-producto/registrar-producto';

import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCkHd0Bk9B-jbCU8gFFPnhBgd7D44FIueM",
    authDomain: "crudfirestore-c4235.firebaseapp.com",
    databaseURL: "https://crudfirestore-c4235.firebaseio.com",
    projectId: "crudfirestore-c4235",
    storageBucket: "crudfirestore-c4235.appspot.com",
    messagingSenderId: "73488675039"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrarProductoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrarProductoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
