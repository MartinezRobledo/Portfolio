import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  activo = "hero";
  oculto:string = '-300px';

  alternarClase():void{
    if(this.oculto === '0')
      this.oculto = '-300px'
    else
      this.oculto = '0'
  }
    
  constructor() { }

  ngOnInit(): void {
  }

}