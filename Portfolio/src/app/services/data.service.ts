import { Injectable } from '@angular/core';
import { Education } from '../Models/Educacion';
import { Habilidad } from '../Models/Habilidad';
import { Persona } from '../Models/Persona';
import { Proyects } from '../Models/Proyects';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Experiencia } from '../Models/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _urlData = "http://localhost:8080/datos";
  private _urlSkills = "http://localhost:8080/skills";
  private _urlProyectos = "http://localhost:8080/proyectos";
  private _urlEducacion = "http://localhost:8080/educacion";
  private _urlExperiencia = "http://localhost:8080/experiencia";

  persona:Persona;
  skills:Habilidad[];
  proyectos:Proyects[];
  formacion:Education[];
  experiencia:Experiencia[];

  constructor(private http:HttpClient) {
    this.getDatos().subscribe(datos =>{
      this.persona = datos[0];
    });

    this.getSkills().subscribe(skills =>{
      this.skills = skills;
    });

    this.getProyectos().subscribe(proyectos =>{
      this.proyectos = proyectos;
    });

    this.getEducacion().subscribe(formacion =>{
      this.formacion = formacion;
    });

    this.getExperiencia().subscribe(experiencia =>{
      this.experiencia = experiencia;
    });
   }

  getDatos():Observable<Persona>{
    return this.http.get<Persona>(`${this._urlData}`);
  }

  actualizarDatos(persona:Persona):Observable<Object>{
    return this.http.put(`${this._urlData+'/'+persona.id}`, persona);
  }

  //Resumen component
  getEducacion(): Observable<Education[]>{
    return this.http.get<Education[]>(`${this._urlEducacion}`);
  }

  addFormacion(formacion:Education):Observable<Object>{
    return this.http.post(`${this._urlEducacion}`, formacion);
  }

  removeFormacion(id:number):Observable<Object>{
    return this.http.delete(`${this._urlEducacion+'/'+id}`);
  }

  edition:boolean = false;

//skills component

  getSkills(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this._urlSkills}`);
  }

  addSkill(skill:Habilidad):Observable<Object>{
    return this.http.post(`${this._urlSkills}`, skill);
  }

  removeSkill(id:number):Observable<Object>{
    return this.http.delete(`${this._urlSkills+'/'+id}`);
  }

  updateSkill(id:number, skill:Habilidad):Observable<Object>{
    return this.http.put(`${this._urlSkills+'/'+id}`, skill);
  }

  //proyects component
  getProyectos(): Observable<Proyects[]>{
    return this.http.get<Proyects[]>(`${this._urlProyectos}`);
  }

  addProyectos(proyecto:Proyects):Observable<Object>{
    return this.http.post(`${this._urlProyectos}`, proyecto);
  }

  removeProyectos(id:number):Observable<Object>{
    return this.http.delete(`${this._urlProyectos+'/'+id}`);
  }

  //Experiencia component
  getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this._urlExperiencia}`);
  }

  addExperiencia(experiencia:Experiencia):Observable<Object>{
    return this.http.post(`${this._urlExperiencia}`, experiencia);
  }

  removeExperiencia(id:number):Observable<Object>{
    return this.http.delete(`${this._urlExperiencia+'/'+id}`);
  }
}

