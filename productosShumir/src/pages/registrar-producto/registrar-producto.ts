import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-registrar-producto',
  templateUrl: 'registrar-producto.html',
})
export class RegistrarProductoPage {


  private miFormulario: FormGroup;
  nombreColeccion = "productos";

  messages: any;
  private db: any;
  model: any = {};
  isEditing: boolean;
  tituloPagina: any;
 
  idProducto: string;
  objetoProducto:any;

  //patronURL = "^(https?://)?(([\\w!~*'().&=+$%-]+: )?[\\w!~*'().&=+$%-]+@)?(([0-9]{1,3}\\.){3}[0-9]{1,3}|([\\w!~*'()-]+\\.)*([\\w^-][\\w-]{0,61})?[\\w]\\.[a-z]{2,6})(:[0-9]{1,4})?((/*)|(/+[\\w!~*'().;?:@&=+$,%#-]+)+/*)$";

  valorNombre = "";
  valorCantidad = "";
  valorPrecio = "";
  valorSabor = "";
  //valorURL = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public fb: FormBuilder) {


        this.db = firebase.firestore(); 


        this.isEditing = this.navParams.data.edicion;
    
        if (this.isEditing == true) {
          this.nombreColeccion = this.navParams.data.nombreColeccion;
          this.idProducto = this.navParams.data.objetoEditado.$key;
          this.objetoProducto = this.navParams.data.objetoEditado;
          this.valorNombre =  this.objetoProducto.nombre;
          this.valorCantidad = this.objetoProducto.cantidad;
          this.valorPrecio = this.objetoProducto.precio;
          this.valorSabor = this.objetoProducto.sabor;
          //this.valorURL = this.objetoCancion.urlVideo;
          this.tituloPagina = "Edicion de un Producto";
          
        }
    
    
        
        this.miFormulario = this.fb.group(
          {
            //valorDefecto,validacionesAsincronas,validacionesSincronas
            nombre: [this.valorNombre,[Validators.required]],
            cantidad: [this.valorCantidad,[Validators.required]],
            precio: [this.valorPrecio, [Validators.required]],
            sabor: [this.valorSabor, [Validators.required]]
           // urlVideo: [this.valorURL, [Validators.required, Validators.pattern(this.patronURL)]]
          }
        );


  }


  addProduct(){
    //alert(JSON.stringify(this.miFormulario.value));
    console.log(this.miFormulario.value);
      if(this.isEditing == false){
      this.addDocument(this.nombreColeccion, this.miFormulario.value);
      console.log('Archivo Añadido');
      this.navCtrl.pop();
    }else{
      this.actualizarDocumento(this.nombreColeccion, this.idProducto, this.miFormulario.value);
      console.log('Edicion realizada correctamente');
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarProductoPage');
  }

   //CRUD METODOS FIREBASE

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

  actualizarDocumento(collectionName: string, docID: string, dataObj: any): Promise<any> {
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
