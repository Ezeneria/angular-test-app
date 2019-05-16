import {Component, Input, OnInit } from '@angular/core';
import { EventEmmiterService } from '../../services/event-emmiter.service';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})

export class FormEditComponent implements OnInit {
  @Input() formContent;

  constructor(private eventEmmiterService: EventEmmiterService) {}

  closeEditForm() {
    this.eventEmmiterService.watchEditForm(false);
  }
  ngOnInit() {
    console.log(this.formContent.lifetimeItems);
  }
}
