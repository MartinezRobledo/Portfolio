import { Injectable } from '@angular/core';
import { Habilidad } from '../Models/Habilidad';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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

}
