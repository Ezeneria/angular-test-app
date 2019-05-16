import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StorageService} from './storage.service';
import { environment } from '../../environments/environment';
const URL_API = 'http://intravision-task.test01.intravision.ru';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {}
  orderList() {
    return this.http.get(`${environment.apiUrl}/odata/tasks?tenantguid=${environment.token}`);
  }
  createOrder(body) {
    return this.http.post(`${environment.apiUrl}/api/${environment.token}/tasks`, body);
  }
  getOrder(id) {
    return this.http.get(`${environment.apiUrl}/api/${environment.token}/Tasks/${id}`);
  }
  editOrder(body) {
    return this.http.put(`${environment.apiUrl}/api/${environment.token}/tasks`, body);
  }
  getOrderStatus() {
    return this.http.get(`${environment.apiUrl}/api/${environment.token}/Statuses`);
  }
  getOrderPriority() {
    return this.http.get(`${environment.apiUrl}/api/${environment.token}/Priorities`);
  }
}
