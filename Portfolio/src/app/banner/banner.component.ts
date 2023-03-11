import { Component } from '@angular/core';
import { Persona } from '../Models/Persona';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent{

  persona:Persona;

  constructor(private dataService:DataService){
    this.persona = this.dataService.persona;
  }

}

