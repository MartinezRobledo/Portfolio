import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any):void{
    console.log(form.value)
  }

}
