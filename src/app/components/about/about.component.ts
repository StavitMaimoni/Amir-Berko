import { NavServicesService } from '../../services/nav-services.service';
import { Component } from '@angular/core';
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    greeting = ''
    scroll = false

    constructor(protected navService: NavServicesService) {
    }
    ngOnInit(): void {
        this.getHour()
        this.navService.mouseIn('about', false)
    }

    getHour() {
        const today = new Date();
        const hours = today.getHours();
      
        if (hours >= 6 && hours <= 11) {
          this.greeting = 'good morning';
        } else if (hours >= 12 && hours <= 17) {
          this.greeting = 'good afternoon';
        } else if (hours >= 18 && hours <= 20) {
          this.greeting = 'good evening';
        } else {
          this.greeting = 'good night';
        }
      }
      
    downloadEnglishCV() {
        const pdfUrl = 'assets/cv-amir-berko-en.docx'
        window.open(pdfUrl, '_blank');
    }

    downloadHebrewCV() {
        const pdfUrl = 'assets/cv-amir-berko-he.docx'
        window.open(pdfUrl, '_blank');
    }

}
