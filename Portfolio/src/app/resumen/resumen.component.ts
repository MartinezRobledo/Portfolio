import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Education } from '../Models/Educacion';
import { Experiencia } from '../Models/Experiencia';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})

export class ResumenComponent implements OnInit {

  formacion:Education[];
  experiencia:Experiencia[];
  login$ = this.auth.loggedIn$;
  edition: boolean;
  availForm:boolean = false;

  resumeForm:FormGroup;
  expForm:FormGroup;

  constructor(private dataService:DataService, private fb:FormBuilder, private auth:AuthService) { 
    this.edition = this.dataService.edition;
    this.formacion = this.dataService.formacion;
    this.experiencia = this.dataService.experiencia;
  }

  ngOnInit(): void {
    this.formBuild();
    this.formBuildexp();
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
    });
  }

  private formBuildexp(){
    this.expForm = this.fb.group({
      rol: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      since: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[0-9]/)]],
      until: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[0-9]/)]],
      empresa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      linkALaEmpresa: ['', Validators.maxLength(200)],
      logo: ['', Validators.maxLength(200)],
    });
  }

  validateEdition(){
    this.dataService.edition = true;
  }

  eliminarElemento(i:number){
    this.dataService.removeExperiencia(this.experiencia[i].id).subscribe();
    this.experiencia.splice(i, 1);
  }

  saveChanges(){
    this.dataService.edition = false;
  }

  onSubmit(){
    this.formacion.push(this.resumeForm.value);
    this.dataService.addFormacion(this.formacion.at(-1)).subscribe();
  }

  exponSubmitexp(){
    this.experiencia.push(this.expForm.value);
    this.dataService.addExperiencia(this.experiencia.at(-1)).subscribe();
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
        message = 'El valor ingresado supera el máximo permitido';
        break;
      case 'minlength':
        message = 'El valor ingresado es demasiado corto';
        break;
      case 'email':
        message = 'El email es inválido. Por favor ingrese un formato válido';
        break;
      case 'requiredPattern':
        message = 'Ingrese un número de 4 dígitos';
        break;
    }
    return message;
  }
}
