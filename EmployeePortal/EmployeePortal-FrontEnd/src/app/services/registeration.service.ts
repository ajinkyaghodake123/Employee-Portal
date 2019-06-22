import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { RegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  private empDetailSubject = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) { }

  public registerUser(regModel: RegisterModel): Observable<any> {
    console.log("in service", RegisterModel)
    this.empDetailSubject.next(regModel.firstName);
    return this.http.post<RegisterModel>(
      'http://localhost:8082/register',
      regModel
    );
    
  }
  getEmployeeDetail() {
    return this.empDetailSubject.asObservable();
  }
}
