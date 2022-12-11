
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from '../Models/Habilidad';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {

  skills:Habilidad[] = [];
  newSkill:FormGroup;
  login$ = this.auth.loggedIn$;
  delete:boolean = false;
  update:boolean = false;

  habilitar = {eliminar:'Habilitar', actualizar:'Habilitar'}

  constructor(private dataService:DataService, private auth:AuthService, private fb:FormBuilder) {
    this.skills = this.dataService.skills;
    this.newSkill = this.fb.group({
      name:['', [Validators.required, Validators.minLength(2)]],
      value:['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
   }

  onSubmit(){
    this.dataService.addSkill(this.newSkill.value);
  }

  validarType(value:number): string {
    let type:string;
    if(value < 40)
      type = 'danger'
    else if(value>70)
      type = 'success'
    else
      type = 'primary'
    return type;
  }

  habilitarEliminar(){
    this.delete = !this.delete;
      if(this.delete)
        this.habilitar.eliminar = 'Deshabilitar';
      else
        this.habilitar.eliminar = 'Habilitar';
  }
  habilitarActualizar(){
    this.update = !this.update;
    if(this.update)
        this.habilitar.actualizar = 'Deshabilitar';
      else
        this.habilitar.actualizar = 'Habilitar';
  }

  eliminarElemento(i:number){
    this.dataService.removeSkill(i);
  }

  actualizarElemento(i:number,value:number){
    this.dataService.updateSkill(i, this.skills[i]);
  }
}
