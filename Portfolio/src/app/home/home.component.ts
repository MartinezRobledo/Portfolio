import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  ngOnInit(){

  }
  
  toggle:boolean = false;
  alternarClase(){
      this.toggle = !this.toggle;
  }

  constructor(private route:ActivatedRoute) {
   }
}
