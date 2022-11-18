import { SetEverythingOffExcept } from './../services/NavHelpers';
import { compileNgModule } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';
import {  } from '../services/NavHelpers'
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class ResumenComponent implements OnInit {

  edit:boolean;

  constructor(private dataService:DataService) { 
    this.edit = this.dataService.login
  }

  ngOnInit(): void {
  }

}
