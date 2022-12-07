import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor() { }

  logIn():void{
    this.loggedIn.next(true);
  }

  logOut():void{
    this.loggedIn.next(false);
  }
}
