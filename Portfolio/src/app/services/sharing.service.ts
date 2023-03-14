import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private estadoDeSesion = new BehaviorSubject<boolean>(false);

  constructor() { }

  get getEstadoDeSesion(){
    return this.estadoDeSesion.asObservable();
  }

  set setEstadoDeSesion(nuevoEstado:boolean){
    this.estadoDeSesion.next(nuevoEstado);
  }
  
}
