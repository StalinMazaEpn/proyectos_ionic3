import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latitud: number =-2.455934;
  longitud: number = -78.0362451;

  constructor(public navCtrl: NavController) {

  }

}
