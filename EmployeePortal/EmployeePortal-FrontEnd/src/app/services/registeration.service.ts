import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor(private http: HttpClient) { }

  public registerUser(RegisterModel): Observable<any> {
    console.log("in service",RegisterModel)
    return this.http.post<RegisterModel>(
      'http://localhost:8082/register',
      RegisterModel
    );
  }
}
