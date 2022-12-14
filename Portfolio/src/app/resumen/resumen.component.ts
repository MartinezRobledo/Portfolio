import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Education } from '../Models/Educacion';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})

export class ResumenComponent implements OnInit {

  formation:Education [] = [];
  login$ = this.auth.loggedIn$;
  edition: boolean;
  availForm:boolean = false;

  resumeForm:FormGroup;

  constructor(private dataService:DataService, private fb:FormBuilder, private auth:AuthService) { 
    this.edition = this.dataService.edition;
    this.formation = this.dataService.formation.slice()
  }

  ngOnInit(): void {
    this.formBuild();
  }

  private formBuild(){
    this.resumeForm = this.fb.group({
      degree: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      since: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[0-9]/)]],
      until: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[0-9]/)]],
      institution: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      syllabus: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      linkToSyllabus: ['', Validators.maxLength(200)],
      logo: ['', Validators.maxLength(200)],
    })
  }

  validateEdition(){
    this.dataService.edition = true;
  }

  eliminarElemento(i:number){
    this.formation.splice(i, 1);
  }

  reset(){
    this.formation = this.dataService.formation.slice()
  }

  saveChanges(){
    this.dataService.formation = Object.assign({}, this.formation);
    this.dataService.formation = this.formation.slice();
    this.dataService.edition = false;
  }

  onSubmit(){
    this.formation.push(this.resumeForm.value);
  }

  public getError(controlName: string):string{
    let error = '';
    const control = this.resumeForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
      console.log(error);
    }
    return this.typeError(error);
  }

  typeError(error:string):string{
    const errorList:string[] = ['required', 'maxlength', 'minlength', 'email', 'requiredPattern'];
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
        message = 'El email es inv??lido. Por favor ingrese un formato v??lido';
        break;
      case 'requiredPattern':
        message = 'Ingrese un n??mero de 4 d??gitos';
        break;
    }
    return message;
  }
}
