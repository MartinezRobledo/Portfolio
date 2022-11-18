import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService:DataService) { 
    this.adrian = this.dataService.persona;
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

}
