import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OrdersService} from '../../services/orders.service';
import {EventEmmiterService} from '../../services/event-emmiter.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {
  createOrder: FormGroup;
  constructor(
    private fb: FormBuilder,
    private orderService: OrdersService,
    private eventEmmiterService: EventEmmiterService
    ) { }
  initForm() {
    this.createOrder = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4), ]),
      comment: new FormControl('', [Validators.required, Validators.minLength(3), ]),
    });
  }
  closeCreateForm() {
    this.eventEmmiterService.watchCreateForm(false);
  }
  submit() {
    this.orderService.createOrder(this.createOrder.value).subscribe(val => console.log(val));
  }
  resetForm() {
    this.createOrder.reset(this.createOrder.value);
  }
  ngOnInit() {
    this.initForm();
  }

}
