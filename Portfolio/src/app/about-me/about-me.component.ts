import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, Subscription } from 'rxjs';
import { Persona } from '../Models/Persona';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  persona:Persona;
  estadoDeSesion$:Observable<boolean>;
  error:boolean = false;
  edad:number;

  nuevosDatos:FormGroup;

  constructor(private dataService:DataService, private formBuilder:FormBuilder, private auth:AuthService, private sharing:SharingService, private toast:ToastrService) {
    this.estadoDeSesion$ = sharing.getEstadoDeSesion;
    this.persona = Object.assign({}, this.dataService.persona);
    this.buildForm();
    this.edad = this.CalculateAge(this.persona.birthdate);
  }

  ngOnInit(){
    this.dataService.getDatos().subscribe(datos =>{
      this.persona = datos[0];
    });
  }

  CalculateAge(birthdate:string): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(birthdate);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  private buildForm() {
    this.nuevosDatos = this.formBuilder.group({
      email: [this.persona.email, [Validators.email, Validators.required]],
      birthplace: [this.persona.birthplace, [Validators.minLength(3), Validators.maxLength(100), Validators.required]],
      birthdate: [this.persona.birthdate, Validators.required],
      address: [this.persona.address, [Validators.minLength(3), Validators.maxLength(100), Validators.required]],
      studylevel: [this.persona.studylevel, [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
      ocupation: [this.persona.ocupation, [Validators.minLength(3), Validators.maxLength(30), Validators.required]],
      phone: [this.persona.phone, [Validators.maxLength(10), Validators.minLength(10), Validators.required]],
      name: [this.persona.name],
      lastname: [this.persona.lastname],
      degree: [this.persona.degree]
    });
  }

  changeField(event:any){
    this.persona[event.target.name] = "";
    this.persona[event.target.name] += event.target.value;
  }

  onSubmit(){
    this.persona.address = this.nuevosDatos.value.address;
    this.persona.ocupation = this.nuevosDatos.value.ocupation;
    this.persona.birthdate = this.nuevosDatos.value.birthdate;
    this.persona.birthplace = this.nuevosDatos.value.birthplace;
    this.persona.studylevel = this.nuevosDatos.value.studylevel;
    this.persona.phone = this.nuevosDatos.value.phone;
    this.persona.email = this.nuevosDatos.value.email;
    this.dataService.actualizarDatos(this.persona).subscribe(response => {
      if(response != null){
        this.toast.error("No posee permisos de administrador");
      }
      else{
        location.reload();
      }
    });
  }

  public getError(controlName: string):string{
    let error = '';
    const control = this.nuevosDatos.get(controlName);
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

  SendDataonChange(event: any) {
    this.edad = this.CalculateAge(event.target.value);
  }

  restoreData(){
    this.persona = Object.assign({}, this.dataService.persona);
  }

}
