import { Component, OnInit } from '@angular/core';
import { Proyects } from '../Models/Proyects';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.sass']
})
export class ProyectsComponent implements OnInit {

  proyects:Proyects[] = [];

  constructor(private dataService:DataService) {
    this.proyects = this.dataService.proyects.slice();
  }

  ngOnInit(): void {
  }

}
