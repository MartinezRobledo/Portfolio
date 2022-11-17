import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  activo = "hero";
  visible:boolean = false;

  alternarClase():void{
    this.visible = !this.visible
  }
    
  constructor() { }

  ngOnInit(): void {
  }

}