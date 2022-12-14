import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Persona } from '../Models/Persona';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  adrian:Persona;
  login$ = this.auth.loggedIn$;
  error:boolean = false;
  edad:number;

  formGroup:FormGroup;

  constructor(private dataService:DataService, private formBuilder:FormBuilder, private auth:AuthService) { 
    this.adrian = Object.assign({}, this.dataService.persona);
    this.edad = this.CalculateAge(this.adrian.birthdate);
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

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: [this.adrian.email, [Validators.email, Validators.required]],
      birthplace: [this.adrian.birthplace, [Validators.minLength(3), Validators.maxLength(100), Validators.required]],
      birthdate: [this.adrian.birthdate, Validators.required],
      address: [this.adrian.address, [Validators.minLength(3), Validators.maxLength(100), Validators.required]],
      studyLevel: [this.adrian.studyLevel, [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
      ocupation: [this.adrian.ocupation, [Validators.minLength(3), Validators.maxLength(30), Validators.required]],
      phone: [this.adrian.phone, [Validators.maxLength(10), Validators.minLength(10), Validators.required]],
      name: [this.adrian.name],
      lastname: [this.adrian.lastname],
      degree: [this.adrian.degree]
    });
  }

  changeField(event:any){
    this.adrian[event.target.name] = "";
    this.adrian[event.target.name] += event.target.value;
  }

  onSubmit(){
    this.adrian = this.formGroup.value;
    console.log(this.adrian);
    this.dataService.updatePersona(this.adrian);
  }

  public getError(controlName: string):string{
    let error = '';
    const control = this.formGroup.get(controlName);
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
        message = 'El valor ingresado supera el m??ximo permitido';
        break;
      case 'minlength':
        message = 'El valor ingresado es demasiado corto';
        break;
      case 'email':
        message = 'El email es inv??lido. Por favor ingrese un formato v??lido'
        break;
    }
    return message;
  }

  SendDataonChange(event: any) {
    this.edad = this.CalculateAge(event.target.value);
    console.log(event.target.value);
  }

  restoreData(){
    this.adrian = Object.assign({},this.dataService.persona);
  }

}
