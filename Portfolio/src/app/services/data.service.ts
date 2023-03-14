import { Injectable } from '@angular/core';
import { Education } from '../Models/Educacion';
import { Habilidad } from '../Models/Habilidad';
import { Persona } from '../Models/Persona';
import { Proyects } from '../Models/Proyects';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Experiencia } from '../Models/Experiencia';
import { AuthService } from './auth.service';
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _urlData = "https://apirest-portfolio.onrender.com/datos";
  private _urlSkills = "https://apirest-portfolio.onrender.com/skills";
  private _urlProyectos = "https://apirest-portfolio.onrender.com/proyectos";
  private _urlEducacion = "https://apirest-portfolio.onrender.com/educacion";
  private _urlExperiencia = "https://apirest-portfolio.onrender.com/experiencia";

  persona:Persona;
  skills:Habilidad[];
  proyectos:Proyects[];
  formacion:Education[];
  experiencia:Experiencia[];

  private authority = getAuth();
  private uid = "F4HT7d1GpXZ0pbduSmTtCKSX9NQ2";

  constructor(private http:HttpClient, private auth:AuthService) {
    this.getDatos().subscribe(datos =>{
      this.persona = datos[0];
    });

    this.getSkills().subscribe(skills =>{
      this.skills = skills.slice();
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
   //Obtencion de informacion
   getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this._urlExperiencia}`);
  }

  getDatos():Observable<Persona>{
    return this.http.get<Persona>(`${this._urlData}`);
  }

  getSkills(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this._urlSkills}`);
  }

  getEducacion(): Observable<Education[]>{
    return this.http.get<Education[]>(`${this._urlEducacion}`);
  }

  getProyectos(): Observable<Proyects[]>{
    return this.http.get<Proyects[]>(`${this._urlProyectos}`);
  }

  //Modificacion de Base de Datos
  addFormacion(formacion:Education):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.post(`${this._urlEducacion}`, formacion);
    else
      return this.http.get(`${this._urlData}`)
  }

  removeFormacion(id:number):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.delete(`${this._urlEducacion+'/'+id}`);
    else
      return this.http.get(`${this._urlData}`);
  }

  addSkill(skill:Habilidad):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.post(`${this._urlSkills}`, skill);
    else
      return this.http.get(`${this._urlSkills}`);
  }

  removeSkill(id:number):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.delete(`${this._urlSkills+'/'+id}`);
    else
      return this.http.get(`${this._urlData}`);
  }

  updateSkill(id:number, skill:Habilidad):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.put(`${this._urlSkills+'/'+id}`, skill);
    else
      return this.http.get(`${this._urlData}`);
  }

  addProyectos(proyecto:Proyects):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.post(`${this._urlProyectos}`, proyecto);
    else
      return this.http.get(`${this._urlData}`);
  }

  removeProyectos(id:number):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.delete(`${this._urlProyectos+'/'+id}`);
    else
      return this.http.get(`${this._urlData}`);
  }

  addExperiencia(experiencia:Experiencia):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.post(`${this._urlExperiencia}`, experiencia);
    else
      return this.http.get(`${this._urlData}`);
  }

  removeExperiencia(id:number):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.delete(`${this._urlExperiencia+'/'+id}`);
    else
      return this.http.get(`${this._urlData}`);
  }

  actualizarDatos(persona:Persona):Observable<Object>{
    if(this.uid === this.authority.currentUser.uid)
      return this.http.put(`${this._urlData+'/'+persona.id}`, persona);
    else
      return this.http.get(`${this._urlData}`);
  }
}

