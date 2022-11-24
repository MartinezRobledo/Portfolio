import { Component, OnInit } from '@angular/core';
import { Education } from '../Models/Educacion';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})

export class ResumenComponent implements OnInit {

  formation:Education [] = [];
  edit:boolean;
  edition: boolean;
  availForm:boolean = false;

  constructor(private dataService:DataService) { 
    this.edit = this.dataService.login;
    this.edition = this.dataService.edition;
    this.formation = this.dataService.formation.slice()
  }

  ngOnInit(): void {
  }

  validateEdition(){
    this.dataService.edition = !this.dataService.edition;
  }

  eliminarElemento(i:number){
    this.formation.splice(i, 1);
  }

  reset(){
    this.formation = this.dataService.formation.slice()
  }

  saveChanges(){
    this.dataService.formation = Object.assign({}, this.formation);
    this.dataService.formation = this.formation.slice();
    this.validateEdition();
  }

  onSubmit(form:any){
    let newFormation = {
      degree: form.value.degree,
      rangeTime: form.value.since + ' - ' + form.value.until,
      institution: form.value.institution,
      syllabus: form.value.syllabus,
      linkToSyllabus: form.value.linkToSyllabus,
      icon: form.value.icon
    }
    this.formation.push(newFormation);
    form.reset();
  }
}
