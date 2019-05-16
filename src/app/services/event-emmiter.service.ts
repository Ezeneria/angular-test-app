import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmmiterService {
  data = new EventEmitter<any>();
  closeEditForm = new EventEmitter<any>();
  closeCreateForm = new EventEmitter<any>();
  newOrder = new EventEmitter<any>();
  constructor() { }
  sendEmmit(data: any) {
    this.data.emit(data);
  }
  watchEditForm(data: boolean) {
    this.closeEditForm.emit(data);
  }
  watchCreateForm(data: boolean) {
    this.closeCreateForm.emit(data);
  }
  getNewOrder(data) {
    this.newOrder.emit(data);
  }
}
