import { Injectable } from '@angular/core';
import { Education } from '../Models/Educacion';
import { Habilidad } from '../Models/Habilidad';
import { Persona } from '../Models/Persona';
import { Proyects } from '../Models/Proyects';

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

  formation:Education[] = [
    {
      degree: 'Ingeniería Informática',
      since: '2017',
      until: 'actual',
      institution: 'Universidad Nacional de La Matanza, Buenos Aires, Argentina',
      syllabus: 'Plan de estudios',
      linkToSyllabus: 'https://ingenieria.unlam.edu.ar/index.php?seccion=3&idArticulo=30',
      icon: '../../assets/img/unlamlogo.png',
    },
    {
      degree: 'Desarrollador Web Full Stacks',
      since: '07/2022',
      until: 'actual',
      institution: 'Argentina Programa',
      syllabus: 'Plan de estudios Angular & Java',
      linkToSyllabus: 'https://www.argentina.gob.ar/produccion/argentina-programa/segunda-etapa',
      icon: '../../assets/img/arg-programa.png',
    },
    {
      degree: 'Desarrollador Web Full Stacks',
      since: '07/2022',
      until: '12/2022',
      institution: 'Codo a Codo - Ciudad de Buenos Aires',
      syllabus: 'Plan de estudios VUE.js & Python',
      linkToSyllabus: '',
      icon: '../../assets/img/codoAcodo.png',
    },
  ];

  updateFormation(formation:Education[]){
    this.formation = Object.assign({}, formation)
  }

  edition:boolean = false;

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

  proyects:Proyects[] = [
    {
      title: 'Portfolio',
      type: 'Web',
      class: 'filter-web',
      linkProyect: 'https://glowing-travesseiro-631628.netlify.app/'
    },
    {
      title: 'Caliuma Construcciones',
      type: 'Web',
      class: 'filter-web',
      linkProyect: 'https://chimerical-meringue-220df9.netlify.app/#/'
    },
    {
      title: 'Calculadora con tema oscuro',
      type: 'App',
      class: 'filter-app',
      linkProyect: 'https://golden-belekoy-909d83.netlify.app/'
    },
    {
      title: 'Librerías propias en C',
      type: 'App',
      class: 'filter-app',
      linkProyect: 'https://github.com/MartinezRobledo/Librerias-Propias-C'
    },
    {
      title: 'Algoritmos BFS y DFS en C++',
      type: 'App',
      class: 'filter-app',
      linkProyect: 'https://github.com/MartinezRobledo/ProgramacionCompetitiva'
    },
  ]

}

