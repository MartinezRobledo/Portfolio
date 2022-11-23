import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title = '';
  @ViewChild('modalBack') modalBack:ElementRef;
  
  public show:boolean = false;

  constructor(private renderer:Renderer2){
    this.renderer.listen('window', 'click', (e: Event)=>{
      if(this.modalBack && e.target === this.modalBack.nativeElement){
        this.show = false;
      }
    });
  }

  showModal(){
    this.show = true;
  }

  hideModal(){
    this.show = false;
  }

}
