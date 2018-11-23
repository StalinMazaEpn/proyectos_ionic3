import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private miFormulario: FormGroup;

  constructor(public navCtrl: NavController,
  public fb: FormBuilder) {


    this.miFormulario = this.fb.group(
      {
        //valorDefecto,validacionesAsincronas,validacionesSincronas
        nombre: ['',[Validators.required]],
        email: ['', [Validators.required,Validators.email]],
        edad: ['', [Validators.required]],
        sexo: ['', [Validators.required]],
        telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      }
    );


  }

  guardarDatos(){
    //obtener los datos del formulario validado
    alert(JSON.stringify(this.miFormulario.value));
  }
  
  /*BIBLIOGRAFIA:
  https://blog.ng-classroom.com/blog/ionic2/validations-in-forms/ */

}
