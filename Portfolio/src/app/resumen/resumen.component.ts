import { SetEverythingOffExcept } from './../services/NavHelpers';
import { compileNgModule } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';
import {  } from '../services/NavHelpers'
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.sass'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class ResumenComponent implements OnInit {

// @HostListener('window:scroll', ['$event'])
// public onViewportScroll(e) {
//   let child = e.srcElement.children[0]
//   let scrollToTop = e.srcElement.children[0].scrollTop
//   //const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//   // if(scrollToTop >= 1660 && scrollToTop <= 2700 ) {
//   //   document.getElementById('resume-nav-id').className = 'nav-link scrollto active'
//   // } else {
//   //   document.getElementById('resume-nav-id').className = 'nav-link scrollto'
//   // }

//   if(scrollToTop >= 1660 && scrollToTop <= 2700 ) {
//     SetEverythingOffExcept('resume-nav-id', document)
//   }

//   //console.log(bottom)
//   console.log(child.scrollHeight)
//   console.log(child.scrollTop)
//   console.log(child.clientHeight)
// }

  constructor() { }

  ngOnInit(): void {
  }

}
