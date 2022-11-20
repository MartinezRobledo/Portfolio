import { Injectable } from '@angular/core';
import { Habilidad } from '../Models/Habilidad';
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  login:boolean = true;

  persona:Persona = new Persona(
    'Adrián',
    'Martínez',
    '1996-11-22',
    'Merlo, Buenos Aires, Argentina',
    'Montevideo, Uruguay',
    1128932478,
    'Universitario',
    'adrianfmart@gmail.com',
    'Freelance',
    ['Desarrollador Full Stacks Jr.', 'Estudiante de Ingeniería'] 
  );

  updatePersona(persona:Persona){
    this.persona = Object.assign({}, persona);
  }

  skills:Habilidad[] = [
    {name: 'HTML', value: 90, type:'success'},
    {name: 'CSS', value: 80, type:'success'},
    {name: 'JavaScript', value: 75, type:'success'},
    {name: 'TypeScript', value: 70, type:'success'},
    {name: 'Angular', value: 65, type:'primary'},
    {name: 'VUE', value: 40, type:'primary'},
    {name: 'MySQL', value: 55, type:'primary'},
    {name: 'C/C++', value: 95, type:'success'},
    {name: 'Python', value: 30, type:'danger'},
    {name: 'Java', value: 25, type:'danger'},
  ]

  addSkill(skill:Habilidad){
    this.skills.push(skill);
  }

  removeSkill(i:number){
    this.skills.splice(i, 1);
  }

  updateSkill(i:number, skill:Habilidad){
    this.skills[i] = skill;
  }

}

