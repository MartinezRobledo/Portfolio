
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

  skillsCol1:Habilidad[];
  skillsCol2:Habilidad[];
  newSkill:FormGroup;
  login$ = this.auth.loggedIn$;
  delete:boolean = false;
  update:boolean = false;

  constructor(private dataService:DataService, private auth:AuthService, private fb:FormBuilder) {
    this.skillsCol1= [...this.dataService.skills];
    this.skillsCol2 = this.skillsCol1.splice(0, (this.skillsCol1.length)/2);
    this.newSkill = this.fb.group({
      name:['', [Validators.required, Validators.minLength(2)]],
      value:['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
   }

  onSubmit(){
    this.dataService.addSkill(this.newSkill.value).subscribe();
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
  }
  habilitarActualizar(){
    this.update = !this.update;
  }

  eliminarElemento(id:number){
    console.log(id);
    this.dataService.removeSkill(id).subscribe();
  }

  actualizarElemento(id:number,skill:Habilidad){
    this.dataService.updateSkill(id, skill).subscribe();
  }
}
