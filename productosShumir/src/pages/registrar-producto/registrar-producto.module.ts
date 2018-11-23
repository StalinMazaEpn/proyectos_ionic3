import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarProductoPage } from './registrar-producto';

@NgModule({
  declarations: [
    RegistrarProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarProductoPage),
  ],
})
export class RegistrarProductoPageModule {}
