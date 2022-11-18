
import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from '../Models/Habilidad';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})

export class SkillsComponent implements OnInit {
  @Input() mostrar:boolean;

  skills:Habilidad[] = []

  constructor(private dataService:DataService) {
    this.skills = this.dataService.skills;
   }

  ngOnInit(): void {
  }

}
