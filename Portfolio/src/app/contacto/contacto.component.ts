import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Persona } from '../Models/Persona';
import { DataService } from '../services/data.service';
import { SharingService } from '../services/sharing.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contactForm:FormGroup;
  estadoDeSesion$:Observable<boolean>;
  persona:Persona;
  popaddress = false;
  popemail = false;
  popphone = false;

  constructor(private fb:FormBuilder, private toastr:ToastrService, private sharing:SharingService, private dataService:DataService) { 
    this.estadoDeSesion$ = sharing.getEstadoDeSesion;
    this.persona = Object.assign({}, this.dataService.persona); 
  }

  ngOnInit(): void {
    this.formBuild();
  }

  private formBuild(){
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
    })
  }

  onSubmit(){
    this.estadoDeSesion$.subscribe(estado => {
      if(estado){
        window.scroll({ 
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
        this.contactForm.reset();
        this.toastr.success("Mensaje enviado correctamente!");
        }
        else{
          window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
          });
          this.contactForm.reset();
          this.toastr.error("Debe iniciar sesion para usar el formulario");
        }
    })
    
  }

  public getError(controlName: string):string{
    let error = '';
    const control = this.contactForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return this.typeError(error);
  }

  typeError(error:string):string{
    const errorList:string[] = ['required', 'maxlength', 'minlength', 'email'];
    let valor:string;
    errorList.forEach((e) => {
      if(error.includes(e)){
        valor = e
      }
    })
    return this.showError(valor);
  }

  showError(error:string):string{
    let message = '';

    switch(error){
      case 'required':
        message = 'El campo es requerido';
        break;
      case 'maxlength':
        message = 'El valor ingresado supera el máximo permitido';
        break;
      case 'minlength':
        message = 'El valor ingresado es demasiado corto';
        break;
      case 'email':
        message = 'El email es inválido. Por favor ingrese un formato válido'
        break;
    }
    return message;
  }

  showpopupads(){
    this.popaddress = true;
    this.popemail =false;
    this.popphone = false;
  }
  
  showpopupemail(){
    this.popemail = true;
    this.popaddress = false;
    this.popphone = false;
  }

  showpopupphone(){
    this.popphone = true;
    this.popaddress =false;
    this.popemail= false;
  }

}
