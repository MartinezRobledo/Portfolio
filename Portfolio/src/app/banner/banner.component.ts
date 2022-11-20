// @ts-nocheck
import { Component } from '@angular/core';
import Typewriter from 't-writer.js'
import { Persona } from '../Models/Persona';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})

export class BannerComponent implements OnInit{

  persona:Persona;

  constructor(private dataService:DataService){
    this.persona = dataService.persona;
  }

  ngOnInit(): void {
    const target = document.querySelector('.tw')

  const options = {
    loop: true
  }

  const writer = new Typewriter(target, {
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    typeColor: 'black'
  })
  
  writer
    .type('Soy ' + this.persona.titulo[0])
    .rest(600)
    .changeOps({ deleteSpeed: 80 })
    .remove(this.persona.titulo[0].length)
    .type(this.persona.titulo[1])
    .rest(600)
    .changeOps({ deleteSpeed: 20 })
    .remove(this.persona.titulo[1].length)
    .clear()
    .start()
  }
}

