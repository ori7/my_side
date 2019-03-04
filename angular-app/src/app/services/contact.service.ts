import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private httpClient: HttpClient) { }

  sendToServer(user): Observable<string> {
    //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.post<string>('http://localhost:8888/contact', user);
  }
}