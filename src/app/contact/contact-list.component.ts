import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit(){
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe(dados => this.contacts = dados);
  }

}
