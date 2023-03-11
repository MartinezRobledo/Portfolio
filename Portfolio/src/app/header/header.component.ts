import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { User } from '../Models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activo = "hero";
  login$ = this.auth.loggedIn$;
  visible:boolean = false;
  errorLogin:boolean = false;

  loginForm:FormGroup;
  signinForm:FormGroup;
  usuarios:User[];

  alternarClase():void{
    this.visible = !this.visible
  }
    
  constructor(private auth:AuthService, private fb:FormBuilder, private router:Router) {
    this.auth.getUsuarios().subscribe(datos => {
      this.usuarios = datos;
    })
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.maxLength(8), Validators.minLength(8)]]
    });

    this.signinForm = this.fb.group({
      name:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      rPassword:['',[Validators.required]]
    });
    
  }

  onSubmitLogin(){
    console.log(this.loginForm.value);
    for(let usuario of this.usuarios){
      console.log(usuario.email)
      if(this.loginForm.value.email === usuario.email){
        if(this.loginForm.value.password === usuario.password){
          this.auth.logIn();
          this.router.navigate(['']);
        }else
          this.errorLogin = true;
      }else
        this.errorLogin = true;
    }
    
  }

  logout(){
    this.auth.logOut();
  }

  public getError(controlName: string):string{
    let error = '';
    const control = this.loginForm.get(controlName);
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

  onSubmitSignin(){
    
  }

}
