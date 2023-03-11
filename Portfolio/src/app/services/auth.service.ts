import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url = "http://localhost:8080/usuarios"

  usuarios:any;
  
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private http:HttpClient) { 
    
  }

  getUsuarios():Observable<User[]>{
    return this.http.get<User[]>(`${this._url}`)
  }

  logIn(){
    this.loggedIn.next(true);
  }

  logOut():void{
    this.loggedIn.next(false);
  }
}
