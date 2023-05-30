import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavServicesService {
  toggleResposiveNav = false

  constructor(private router: Router) { }

  responsiveNav() {
    this.toggleResposiveNav = !this.toggleResposiveNav
    const navResponsive = document.querySelector('.nav-responsive') as HTMLElement
    if(this.toggleResposiveNav) {
      navResponsive.style.cssText = 'right: 0rem'
    } else {
      navResponsive.style.cssText = 'right: -100rem'
    }
  }

  minimizeNavResponsive() {
    setTimeout(() => {
      const navResponsive = document.querySelector('.nav-responsive') as HTMLElement
      this.toggleResposiveNav = !this.toggleResposiveNav
      navResponsive.style.cssText = 'right: -100rem'
    }, 120)
  }

  toggleHideNav(showNav: boolean) {
    const navWrapper = document.querySelector('.nav-wrapper') as HTMLElement
    if(showNav) {
      navWrapper.style.cssText = 'visibility: visible; z-index:999;'
    } else {
      navWrapper.style.cssText = 'z-index: -999;'
    }
  }

  cleanMargin(){
    const home = document.querySelector('#home') as HTMLElement
    const about = document.querySelector('#about') as HTMLElement
    const contact = document.querySelector('#contact') as HTMLElement
    const homeResponsive = document.querySelector('#home-responsive') as HTMLElement
    const aboutResponsive = document.querySelector('#about-responsive') as HTMLElement
    const contactResponsive = document.querySelector('#contact-responsive') as HTMLElement
    home.classList.remove('a-selected')
    about.classList.remove('a-selected')
    contact.classList.remove('a-selected')
    homeResponsive.classList.remove('a-selected-responsive')
    aboutResponsive.classList.remove('a-selected-responsive')
    contactResponsive.classList.remove('a-selected-responsive')
  }
  
  mouseIn(rotaString: string, click: boolean): void {
    this.cleanMargin()
    document.body.scrollTop = 0;
    
    if(click){
      this.minimizeNavResponsive()
    }
    
    if(rotaString === 'home') {
      const home = document.querySelector('#home') as HTMLElement
      const homeResponsive = document.querySelector('#home-responsive') as HTMLElement
      home.classList.add('a-selected')
      homeResponsive.classList.add('a-selected-responsive')
    } 
     else if(rotaString === 'about') {
      const about = document.querySelector('#about') as HTMLElement
      const aboutResponsive = document.querySelector('#about-responsive') as HTMLElement
      about.classList.add('a-selected')
      aboutResponsive.classList.add('a-selected-responsive')
    } 
    if(rotaString === 'contact'){
      const contact = document.querySelector('#contact') as HTMLElement
      const contactResponsive = document.querySelector('#contact-responsive') as HTMLElement
      contact.classList.add('a-selected')
      contactResponsive.classList.add('a-selected-responsive')
    }
    else{
      this.router.navigate([rotaString])
    }
    this.router.navigate([rotaString])
  }

}
