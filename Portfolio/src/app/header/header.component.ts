import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { SharingService } from '../services/sharing.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activo = "hero";
  estadoDeSesion$:Observable<boolean>;
  visible:boolean = false;
  modalActive:boolean=true;
  showparent:boolean;
  loginForm:FormGroup;
  signinForm:FormGroup;

  alternarClase():void{
    this.visible = !this.visible
  }
    
  constructor(private auth:AuthService, private fb:FormBuilder, private router:Router, 
              private sharing:SharingService, private toastr:ToastrService) {
    this.estadoDeSesion$ = sharing.getEstadoDeSesion;
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]
    });

    this.signinForm = this.fb.group({
      name:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required, Validators.maxLength(15), Validators.minLength(6)]],
      rPassword:['',[Validators.required]]
    });
    
  }

  onSubmitSignin(event:Event){
    event.preventDefault();
    console.log(this.signinForm.value);
    this.auth.registrarUsuario(this.signinForm.value).then(()=>{
      this.auth.añadirUsuario(this.signinForm.value).subscribe();
      Swal.fire('Usuario guardado', 'Usuario guardado con exito', 'success');
    }).catch(e => console.log(e));
    
  }

  onSubmitLogin(){
    this.auth.iniciarSesion(this.loginForm.value)
      .then(() =>{
        this.showparent = false;
        this.toastr.success("Se inicio sesion correctamente!");
        this.loginForm.reset();
      })
      .catch(e => {
        this.loginForm.reset();
        this.toastr.error(this.firebaseError(e.code));
      });
  }

  firebaseError(code: string) {
    switch (code) {
      //correo ya existe
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      //contraseña debila
      case 'auth/weak-password':
        return 'La contraseña es muy debil';
      //email invalido
      case 'auth/invalid-email':
        return 'El formato del email es invalido';
      //usuario no existente
      case 'auth/user-not-found':
        return 'El usuario no existe';
      //La contraseña es erronea
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';
      default:
        return 'Error desconocido';
    }
  }

  signingGoogle(){
    this.auth.iniciarSesionConGoogle()
      .then(response => {
        this.router.navigate(['/']);
        console.log(response);
      })
      .catch(e => console.log(e));
  }

  logout(){
    this.auth.cerrarSesion()
      .then(() => {
        this.toastr.success("Se cerró sesion con éxito!");
      })
      .catch(e => console.log(e));
  }

  public getErrorSigninForm(controlName: string):string{
    let error = '';
    const control = this.signinForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return this.typeError(error);
  }

  public getErrorLoginForm(controlName: string):string{
    let error = '';
    const control = this.loginForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
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
