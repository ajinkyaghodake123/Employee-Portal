import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient) { }

  public showList(): Observable<any> {
    return this.http.get<RegisterModel>(
      'http://localhost:8082/getAllEmp'
    );
  }
}
