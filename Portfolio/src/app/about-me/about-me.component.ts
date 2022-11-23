import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../Models/Persona';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  adrian:Persona;
  edit:boolean;
  edad:number;
  updateForm:FormGroup;

  constructor(private dataService:DataService) { 
    this.adrian = Object.assign({}, this.dataService.persona);
    this.edit = this.dataService.login;
    this.edad = this.CalculateAge();
  }

  CalculateAge(): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(this.adrian.birthdate);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  ngOnInit(): void {
  }

  changeField(event:any){
    this.adrian[event.target.name] = "";
    this.adrian[event.target.name] += event.target.value;
  }

  restoreData(){
    this.adrian = Object.assign({},this.dataService.persona);
  }

  saveChanges(){
    this.dataService.updatePersona(this.adrian)
  }

}
