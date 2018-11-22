import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.services';


@IonicPage()
@Component({
  selector: 'page-lista-actividades',
  templateUrl: 'lista-actividades.html',
})
export class ListaActividadesPage {

  note:any = { id: null, title: null, description: null};
  id = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public notesService: NotesService) {

      this.id = navParams.get('id');

      if(this.id != 0){
        //this.note = notesService.getNote(this.id);
        notesService.getNote(this.id)
        .valueChanges().subscribe(note =>{        
          this.note = note;});     
      }     
  }

  addNote(){
    if(this.id != 0){      
      this.notesService.editNote(this.note);
      alert('Nota editada con exito');      
    } else {
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
      alert('Nota creada con exito');      
    } 
    this.navCtrl.pop();     
  }

  deleteNote(){
    this.notesService.deleteNote(this.note);
    alert('Nota Eliminada con Exito');
    this.navCtrl.pop();
  }


}
