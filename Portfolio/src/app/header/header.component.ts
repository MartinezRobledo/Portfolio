import { Component, OnInit } from '@angular/core';
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

  alternarClase():void{
    this.visible = !this.visible
  }
    
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.logIn();
  }

  logout(){
    this.auth.logOut();
  }

}