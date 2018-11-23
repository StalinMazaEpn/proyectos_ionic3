import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //messages: any;
  usuarios: any;
  private db: any;
  //model: any = {};
  modelo: any = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController) {
    this.db = firebase.firestore();
    this.loadData();
  }

  loadData(){
    this.getAllDocuments("usuarios").then((e)=>{
      this.usuarios = e;
  });
  }

addMessage(){
    if(!this.isEditing){
    this.addDocument("usuarios", this.modelo).then(()=>{
      this.loadData();//refresh view
    });
  }else{
    this.updateDocument("usuarios", this.modelo.$key, this.modelo).then(()=>{
      this.loadData();//refresh view
    });
  }
  this.isEditing = false;
  //clear form
  this.modelo.nombre = '';
  this.modelo.nickname = '';
  this.modelo.age = '';
}

updateMessage(obj){
  this.modelo = obj;
  this.isEditing = true;
}

deleteMessage(key){
  this.deleteDocument("usuarios", key).then(()=>{
    this.loadData();//refresh view
    this.isEditing = false;
  });
}





//CRUD operation methods------------------------------------------------------------------------------------------

getAllDocuments(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    console.log(obj)
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    console.log("Datos del Documento:", arr);
                    resolve(arr);
                } else {
                    console.log("No such document!");
                    resolve(null);
                }


            })
            .catch((error: any) => {
                reject(error);
            });
    });
}

deleteDocument(collectionName: string, docID: string): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .delete()
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

addDocument(collectionName: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db.collection(collectionName).add(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

updateDocument(collectionName: string, docID: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .update(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

}
