import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';

const config = {
  /*apiKey: "AIzaSyDipIomkPWn5SdtfwwlI_X56wwRohqo7SM",
  authDomain: "crud-5bc68.firebaseapp.com",
  databaseURL: "https://crud-5bc68.firebaseio.com",
  projectId: "crud-5bc68",
  storageBucket: "crud-5bc68.appspot.com",
  messagingSenderId: "55546537638"*/
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
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
