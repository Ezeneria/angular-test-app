import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../services/orders.service';
import {EventEmmiterService} from '../../services/event-emmiter.service';
import {combineLatest, merge, Observable, timer} from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private orderService: OrdersService, private eventEmmiterService: EventEmmiterService) {
  }

  listOrders$: Observable<any> = this.orderService.orderList();
  statusOrders$: Observable<any> = this.orderService.getOrderStatus();
  priorityOrders$: Observable<any> = this.orderService.getOrderPriority();
  priorityOrders;
  listOrders;
  statusOrders;
  statusColorOrder;
  priorityColorOrder;

  getOrder(id) {
    this.orderService.getOrder(id).subscribe(val => {
        this.eventEmmiterService.sendEmmit({status: true, order: val});
      }
    );
  }

  colors(list, status, priority) {
    this.statusColorOrder = [];
    this.priorityColorOrder = [];
    list.forEach(order => {
      status.forEach(color => {
        if (order.statusId === color.id) {
          return this.statusColorOrder.push({color: color.rgb});
        }
      });
      priority.forEach(color => {
        if (order.priorityId === color.id) {
          return this.priorityColorOrder.push({color: color.rgb});
        }
      });
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnInit() {
    combineLatest(this.listOrders$, this.statusOrders$, this.priorityOrders$).subscribe(val => {
      this.listOrders = val[0].value;
      this.statusOrders = val[1];
      this.priorityOrders = val[2];
      this.colors(this.listOrders, this.statusOrders, this.priorityOrders);
      console.log(this.priorityColorOrder);
    });
    this.eventEmmiterService.newOrder.subscribe(order => {
      this.listOrders.unshift(order);
      this.colors(this.listOrders, this.statusOrders, this.priorityOrders);
      console.log('status', this.statusColorOrder);
      console.log('priority', this.priorityColorOrder);
    });
  }
}
