import { Component, OnInit } from '@angular/core';
import { Proyects } from '../Models/Proyects';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  proyects:Proyects[] = [];
  proyectLink:string;
  proyectName:string;

  constructor(private dataService:DataService) {
    this.proyects = this.dataService.proyects.slice();
  }

  ngOnInit(): void {
  }

  getUrl(i:number){
    if(this.proyects[i].linkProyect.includes('github')){
      return `https://www.muylinux.com/wp-content/uploads/2017/06/github.png`;
    }
    return this.proyects[i].linkProyect;
  }

  setDataModal(link:string, name:string){
    this.proyectLink = link;
    this.proyectName = name;
  }

}