import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private httpClient: HttpClient) { }

  sendToServer(user): Observable<string> {

    return this.httpClient.post<string>('http://localhost:8888/contact', user);

  }
}