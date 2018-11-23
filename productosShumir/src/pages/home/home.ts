import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarProductoPage } from '../registrar-producto/registrar-producto';

import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productos: any;
  private db: any;
  model: any = {};
  nombreColeccion: string = "productos";

  constructor(public navCtrl: NavController) {
    this.db = firebase.firestore();
    this.cargarProductos();
  }

  agregarProducto(){
    console.log('Navegacion hacia el formulario de Ingreso Canciones');
    this.navCtrl.push(RegistrarProductoPage,{ edicion: false});
  }

  ionViewDidEnter() {
    
    console.log('Cargo Home Page');
    this.cargarProductos();
  }

  cargarProductos(){
    this.obtenerDocumentos(this.nombreColeccion).then((e)=>{
      this.productos = e;
  });
  }

  actualizarProducto(obj){
    this.navCtrl.push(RegistrarProductoPage,{ 
      nombreColeccion: this.nombreColeccion,
      objetoEditado: obj,
      edicion: true
    });
  }

  eliminarProducto(key){
    this.eliminarDocumento(this.nombreColeccion, key).then(()=>{
      this.cargarProductos();//refresh view      
    });
  }

  //CRUD METODOS FIREBASE

  obtenerDocumentos(collection: string): Promise<any> {
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
                    console.log("Datos obtenidos:", arr);
                    resolve(arr);
                } else {
                    console.log("No se encontraron documentos!");
                    resolve(null);
                }
 
 
            })
            .catch((error: any) => {
                reject(error);
            });
    });
  }

  eliminarDocumento(collectionName: string, docID: string): Promise<any> {
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



  //FIN METODOS CRUD FIREBASE


}
