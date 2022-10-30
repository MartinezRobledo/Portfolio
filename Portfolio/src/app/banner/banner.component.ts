// @ts-nocheck
import { Component } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})

export class BannerComponent implements OnInit{

  persona:any = {
    nombre: 'Adrián',
    apellido: 'Martínez',
    titulo: 'desarrollador Full Stacks Jr'
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
    .type('Soy ' + this.persona.titulo)
    .rest(600)
    .changeOps({ deleteSpeed: 80 })
    .remove(28)
    .type('estudiante de Ingeniería')
    .rest(600)
    .changeOps({ deleteSpeed: 20 })
    .remove(21)
    .clear()
    .start()
  }
}

