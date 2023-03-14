
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Habilidad } from '../Models/Habilidad';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {

  skillsCol1:Habilidad[];
  skillsCol2:Habilidad[];
  newSkill:FormGroup;
  estadoDeSesion$:Observable<boolean>;
  delete:boolean = false;
  update:boolean = false;

  constructor(private dataService:DataService, private auth:AuthService, private fb:FormBuilder, private sharing:SharingService, private toast:ToastrService) {
    this.skillsCol1= [...this.dataService.skills];
    this.skillsCol2 = this.skillsCol1.splice(0, (this.skillsCol1.length)/2);
    this.newSkill = this.fb.group({
      name:['', [Validators.required, Validators.minLength(2)]],
      value:['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
    this.estadoDeSesion$ = this.sharing.getEstadoDeSesion;
   }

  onSubmit(){
    this.dataService.addSkill(this.newSkill.value).subscribe(response => {
      if(response === null){
        this.dataService.getSkills().subscribe(skills =>{
          this.skillsCol1 = [...skills];
          this.skillsCol2 = this.skillsCol1.splice(0, (this.skillsCol1.length)/2);
        });
      }
      else{
        this.newSkill.reset();
        this.toast.error("No posee permisos de administrador");
      }
    });
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
    this.dataService.removeSkill(id).subscribe(response =>{
      if(response === null){
        this.dataService.getSkills().subscribe(skills =>{
          this.skillsCol1 = [...skills];
          this.skillsCol2 = this.skillsCol1.splice(0, (this.skillsCol1.length)/2);
        });
      }
      else{
        this.toast.error("No posee permisos de administrador");
      }
    });
  }

  actualizarElemento(id:number,skill:Habilidad){
    this.dataService.updateSkill(id, skill).subscribe();
  }
}
