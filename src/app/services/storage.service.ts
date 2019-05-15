import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveTocken(token) {
    localStorage.setItem('token', token);
  }
  getTokenLocalStorage(): string {
      return localStorage.getItem('token');
  }
}
