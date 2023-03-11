import { Component, OnInit } from '@angular/core';
import { Proyects } from '../Models/Proyects';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  proyectos:Proyects[];
  proyectLink:string;
  proyectName:string;

  constructor(private dataService:DataService) {
    this.proyectos = this.dataService.proyectos;
  }

  ngOnInit(){
  }

  setDataModal(link:string, name:string){
    this.proyectLink = link;
    this.proyectName = name;
  }

}