import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { NotesService } from '../../services/notes.services';
import { ListaActividadesPage } from '../lista-actividades/lista-actividades';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes = [];
 
  constructor(public navCtrl: NavController,
              public notesService: NotesService) {
          //this.notes = notesService.getNotes();
          notesService.getNotes()
          .valueChanges().subscribe(notas=> {
            this.notes=notas;
        });
  }

  public irListaActividades(id){
    this.navCtrl.push(ListaActividadesPage, {id:id});
  }

  public crearActividad(){
    this.navCtrl.push(ListaActividadesPage, {id:0});
  }

}
