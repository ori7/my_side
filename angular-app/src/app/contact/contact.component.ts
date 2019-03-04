import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userModel: UserModel;

  constructor(private contactService: ContactService) {
    this.userModel = <UserModel>{};
  }

  ngOnInit() {
  }

  getUser() {

    this.contactService.sendToServer(this.userModel).subscribe(successRes => {
      alert('saved');
    }, errorRes => {console.log(errorRes);
      alert('failed');
    });

  }

}
