import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  title = 'Portfolio';

  cargando:boolean = true;

  constructor(private data:DataService){
    data.getDatos().subscribe(response => {
      console.log(response);
      if(response === null){
        this.cargando = true;
      }
      else{
        this.cargando = false;
      }
    })
  }

  ngOnInit(): void {
  }


}
