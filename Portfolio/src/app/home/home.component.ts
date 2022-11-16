import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { SetEverythingOffExcept } from '../services/NavHelpers'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
  
@HostListener('window:scroll', ['$event'])
  public onViewportScroll(e:any) {
    let child = e.srcElement.children[0]
    let scrollToTop = e.srcElement.children[0].scrollTop
    if(scrollToTop >= 0 && scrollToTop <= 708 ) {
      SetEverythingOffExcept('hero-nav-id', document)
    } else if(scrollToTop >= 709 && scrollToTop <= 1254 ) {
      SetEverythingOffExcept('about-nav-id', document)
    }else if(scrollToTop >= 1255 && scrollToTop <= 1670 ) {
      SetEverythingOffExcept('skills-nav-id', document)
    } else if(scrollToTop >= 1660 && scrollToTop <= 2953 ) {
      SetEverythingOffExcept('resume-nav-id', document)
    } else if(scrollToTop >= 2954 && scrollToTop <= 3800 ) {
      SetEverythingOffExcept('portfolio-nav-id', document)
    } else if(scrollToTop >= 3801 && scrollToTop <= 4500 ) {
      SetEverythingOffExcept('contact-nav-id', document)
    }
    //console.log(bottom)
    console.log(child.scrollHeight)
    console.log(child.scrollTop)
    console.log(child.clientHeight)
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
