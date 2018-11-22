import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaActividadesPage } from './lista-actividades';

@NgModule({
  declarations: [
    ListaActividadesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaActividadesPage),
  ],
})
export class ListaActividadesPageModule {}
