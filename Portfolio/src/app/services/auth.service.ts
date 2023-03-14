import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/User';
import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url = "http://localhost:8080/usuarios"

  usuario:User;

  constructor(private auth:Auth, private http:HttpClient, sharing:SharingService) { 
    auth.onAuthStateChanged(function(user) {
      if (user) {
        sharing.setEstadoDeSesion = true;
      } else {
        sharing.setEstadoDeSesion = false;
      }});
  }

  registrarUsuario(usuario:User){
    return createUserWithEmailAndPassword(this.auth, usuario.email, usuario.password);
  }

  iniciarSesion(usuario:User){
    return signInWithEmailAndPassword(this.auth,usuario.email,usuario.password);
  }

  iniciarSesionConGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  cerrarSesion(){
    return signOut(this.auth);
  }

  getUsuario(id:number):Observable<User>{
    return this.http.get<User>(`${this._url+'/'+id}`);
  }

  public añadirUsuario(usuario:any){
    return this.http.post(`${this._url}`, usuario);
  }
}
