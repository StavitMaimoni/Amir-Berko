import { NavServicesService } from 'src/app/services/nav-services.service';
import { NotifyService } from 'src/app/services/notify.service';
import { Component, ViewChild } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    message = "";
    name = "";
    email = "";
    angularScript = [
        { isThis: '' }
    ];

    constructor(private navService: NavServicesService, private notifyService: NotifyService) { }

    ngOnInit(): void {
        this.navService.mouseIn('contact', false);
    }

    sendEmail(e: Event) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        e.preventDefault();
        if (!this.name || !this.message || !this.email) {
            this.notifyService.error("Please fill in all input fields in order to send a message");
            return;
        }
        if (!emailRegex.test(this.email)) {
            this.notifyService.error("Invalid email address");
            return;
        }
        else {
            emailjs.sendForm('service_83tzlol', 'template_2zxxpf9', e.target as HTMLFormElement, 'DW7k4BiBzPN57_p0Q')
                .then((result: EmailJSResponseStatus) => {
                    console.log(result.text);
                    this.name = "";
                    this.message = "";
                    this.email = "";
                    this.notifyService.success('Email Sent Successfully!\nThank you for contacting me :)');
                }, (error) => {
                    console.log(error.text);
                    this.notifyService.error('Error :(\nPlease try again later!');
                });
        }
    }
}
