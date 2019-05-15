import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StorageService} from './storage.service';

const URL_API = 'http://intravision-task.test01.intravision.ru';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  TOKEN: string;
  constructor(private http: HttpClient, private storageService: StorageService) {
    this.TOKEN = this.storageService.getTokenLocalStorage();
  }
  orderList() {
    return this.http.get(`${URL_API}/odata/tasks?tenantguid=${this.TOKEN}`);
  }
  createOrder(body) {
    return this.http.post(`${URL_API}/api/${this.TOKEN}/tasks`, body);
  }
  getOrder(id) {
    return this.http.get(`${URL_API}/api/${this.TOKEN}/Tasks/${id}`);
  }
  editOrder(body) {
    return this.http.put(`${URL_API}/api/${this.TOKEN}/tasks`, body);
  }
}
