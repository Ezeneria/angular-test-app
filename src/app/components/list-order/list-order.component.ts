import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersService} from '../../services/orders.service';
import {EventEmmiterService} from '../../services/event-emmiter.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit, OnDestroy {
  listOrders;
  editOrderForm = false;
  createForm = false;
  formEditContent;
  constructor(private orderService: OrdersService, private eventEmmiterService: EventEmmiterService) {}

  showCreateForm() {
    this.createForm = true;
    this.editOrderForm = false;
  }
  ngOnInit() {
    this.orderService.orderList().subscribe(orders => {
        this.listOrders = orders;
      }
    );
    this.eventEmmiterService.closeEditForm.subscribe( status => this.editOrderForm = status);
    this.eventEmmiterService.closeCreateForm.subscribe( status => this.createForm = status);
    this.eventEmmiterService.data.subscribe(form => {
      this.formEditContent = form.order;
      if (!this.editOrderForm) {
        this.editOrderForm = form.status;
        this.createForm = false;
      }
    });
  }
  ngOnDestroy() {
    this.eventEmmiterService.closeCreateForm.unsubscribe();
    this.eventEmmiterService.closeEditForm.unsubscribe();
    this.eventEmmiterService.data.unsubscribe();
  }
}
