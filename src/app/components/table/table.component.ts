import {Component, EventEmitter, Input} from '@angular/core';
import {OrdersService} from '../../services/orders.service';
import {Output} from '@angular/compiler/src/core';
import {EventEmmiterService} from '../../services/event-emmiter.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private orderService: OrdersService, private eventEmmiterService: EventEmmiterService) { }
  @Input() dataTable;

  getOrder(id) {
    this.orderService.getOrder(id).subscribe(val => {
      this.eventEmmiterService.sendEmmit({status: true, order: val});
      }
    );
  }
}
