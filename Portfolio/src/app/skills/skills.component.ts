
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

  constructor(private dataService:DataService) {
    this.skills = this.dataService.skills;
    this.edit = this.dataService.login
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    form.value.type = this.validarType(form.value.value);
    this.dataService.addSkill(form.value)
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

}
