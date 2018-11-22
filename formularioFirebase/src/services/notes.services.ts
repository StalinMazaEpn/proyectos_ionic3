import { Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database/database';


@Injectable()
export class NotesService {

    constructor(public afDB: AngularFireDatabase){

    }

    notes = [
        {id: 1, title: "Nota 1", description: "Descripcion 1"},
        {id: 2, title: "Nota 2", description: "Descripcion 2"},
        {id: 3, title: "Nota 3", description: "Descripcion 3"}
      ];

      public getNotes(){
          //return this.notes;
          return this.afDB.list('notas/');
      }

      public getNote(id) {
        return this.afDB.object('notas/'+id);
          /*return this.notes.filter(function(e, i){
            return e.id == id
          })[0] || {id: null, title: null, description: null};*/
      }

      public createNote(note){
          //this.notes.push(note);
          this.afDB.database.ref('notas/'+note.id).set(note);
      }

      public editNote(note){
          /*for( let i = 0; i < this.notes.length; i++) {
                if(this.notes[i].id == note.id){
                    this.notes[i] = note;
                }
          }*/
          this.afDB.database.ref('notas/'+note.id).set(note);
      }

      public deleteNote(note){
        this.afDB.database.ref('notas/'+note.id).remove(note);
        /*for( let i = 0; i < this.notes.length; i++) {
            if(this.notes[i].id == note.id){
                this.notes.splice(i,1);
                }
            }*/
      }


}