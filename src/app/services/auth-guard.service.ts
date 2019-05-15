import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }
  canActivate() {
    if (this.authService.authenticated) {
      return true;
    }
    //Так как в макете нет страницы
    // авторизации, то мне его некуда отправить,
    // поэтому guard не возвращает ничего в случае false
  }
}
