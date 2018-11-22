import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotesService } from '../services/notes.services';
import { ListaActividadesPage } from '../pages/lista-actividades/lista-actividades';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyCkFf60Lsu-_1QZXU-54bGPRGncxGATpLA",
    authDomain: "datosstalin.firebaseapp.com",
    databaseURL: "https://datosstalin.firebaseio.com",
    projectId: "datosstalin",
    storageBucket: "datosstalin.appspot.com",
    messagingSenderId: "440241994183"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaActividadesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaActividadesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService
  ]
})
export class AppModule {}
