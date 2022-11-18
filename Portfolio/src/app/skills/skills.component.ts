
import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from '../Models/Habilidad';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {
  @Input() mostrar:boolean;

  skills:Habilidad[] = []
  edit:boolean;
  delete:boolean = false;
  update:boolean = false;
  habilitar = {eliminar:'Habilitar', actualizar:'Habilitar'}

  constructor(private dataService:DataService) {
    this.skills = this.dataService.skills;
    this.edit = this.dataService.login
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    form.value.type = this.validarType(form.value.value);
    this.dataService.addSkill(form.value)
    form.reset();
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
    this.skills[Math.trunc(i)].type = this.validarType(value);
    this.dataService.updateSkill(i, this.skills[i]);
  }

}
