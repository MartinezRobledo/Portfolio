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
//about-me component
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
    ['Desarrollador Full Stacks Jr.'],
    '../../assets/img/selfi.png'
  );

  updatePersona(persona:Persona){
    // this.persona = Object.assign({}, persona);
    this.persona = persona;
  }
//Resumen component
  formation:Education[] = [
    {
      degree: 'Ingeniería Informática',
      since: '2017',
      until: 'actual',
      institution: 'Universidad Nacional de La Matanza, Buenos Aires, Argentina',
      syllabus: 'Plan de estudios',
      linkToSyllabus: 'https://ingenieria.unlam.edu.ar/index.php?seccion=3&idArticulo=30',
      logo: '../../assets/img/unlamlogo.png',
    },
    {
      degree: 'Desarrollador Web Full Stacks',
      since: '07/2022',
      until: 'actual',
      institution: 'Argentina Programa',
      syllabus: 'Plan de estudios Angular & Java',
      linkToSyllabus: 'https://www.argentina.gob.ar/produccion/argentina-programa/segunda-etapa',
      logo: '../../assets/img/arg-programa.png',
    },
    {
      degree: 'Desarrollador Web Full Stacks',
      since: '07/2022',
      until: '12/2022',
      institution: 'Codo a Codo - Ciudad de Buenos Aires',
      syllabus: 'Plan de estudios VUE.js & Python',
      linkToSyllabus: '',
      logo: '../../assets/img/codoAcodo.png',
    },
  ];

  updateFormation(formation:Education[]){
    this.formation = Object.assign({}, formation)
  }

  edition:boolean = false;
//skills component
  skills:Habilidad[] = [
    {name: 'HTML', value: 90},
    {name: 'CSS', value: 80},
    {name: 'JavaScript', value: 75},
    {name: 'TypeScript', value: 70},
    {name: 'Angular', value: 65},
    {name: 'VUE', value: 40},
    {name: 'MySQL', value: 55},
    {name: 'C/C++', value: 95},
    {name: 'Python', value: 30},
    {name: 'Java', value: 35},
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
//proyects component
  proyects:Proyects[] = [
    {
      title: 'Portfolio',
      type: 'web',
      linkProyect: 'https://glowing-travesseiro-631628.netlify.app/'
    },
    {
      title: 'Caliuma Construcciones',
      type: 'web',
      linkProyect: 'https://chimerical-meringue-220df9.netlify.app/#/'
    },
    {
      title: 'Calculadora con tema oscuro',
      type: 'app',
      linkProyect: 'https://golden-belekoy-909d83.netlify.app/'
    },
    {
      title: 'Librerías propias en C',
      type: 'app',
      linkProyect: 'https://github.com/MartinezRobledo/Librerias-Propias-C'
    },
    {
      title: 'Algoritmos BFS y DFS en C++',
      type: 'app',
      linkProyect: 'https://github.com/MartinezRobledo/ProgramacionCompetitiva'
    },
  ]

}

