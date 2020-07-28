import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable()
export class ContactService {
    private contactUrl = 'http://localhost:3000/contacts'

    constructor(private http: HttpClient) {}

    getContacts() {
      return this.http.get<any[]>(`${this.contactUrl}`);
    }
    
}