import { HostListener } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SetEverythingOffExcept } from '../services/NavHelpers'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

@HostListener('window:scroll', ['$event'])
  public onViewportScroll(e) {
    let child = e.srcElement.children[0]
    let scrollToTop = e.srcElement.children[0].scrollTop
    if(scrollToTop >= 0 && scrollToTop <= 708 ) {
      SetEverythingOffExcept('hero-nav-id', document)
    } else if(scrollToTop >= 709 && scrollToTop <= 1254 ) {
      SetEverythingOffExcept('about-nav-id', document)
    }else if(scrollToTop >= 1255 && scrollToTop <= 1670 ) {
      SetEverythingOffExcept('skills-nav-id', document)
    } else if(scrollToTop >= 1660 && scrollToTop <= 2700 ) {
      SetEverythingOffExcept('resume-nav-id', document)
    } else if(scrollToTop >= 2701 && scrollToTop <= 2973 ) {
      SetEverythingOffExcept('portfolio-nav-id', document)
    } else if(scrollToTop >= 2974 && scrollToTop <= 4000 ) {
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
