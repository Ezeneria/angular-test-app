import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {}
  public authenticated = false;
  getTokenFromServer() {
    return this.http.get<Observable<string>>('http://intravision-task.test01.intravision.ru/api/Tenants');
  }
}
