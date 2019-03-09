import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private http: Http) { }

  fromName: string = '';
  fromEmail: string = '';
  fromPhone: string = '';
  mailMessage: string = "";

  ngOnInit() {
  }

  onSubmit(){
    
    var template_params = {
      "from_name": this.fromName,
      "fromEmail": this.fromEmail,
      "fromPhone": this.fromPhone,
      "mailMessage": this.mailMessage
   }

   var data = {
    "service_id" : "gmail",
    "template_id" : "template_zH0N7Dgo",
    "user_id" : "user_Rt44APYZAVvyQCkxpE92S",
    "template_params" : template_params
   }
   
   this.http.post("https://api.emailjs.com/api/v1.0/email/send", data)
        .subscribe((e) => {
          alert("Altask Systechs will contact you shortly");
        });
  }

}
