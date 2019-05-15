import { Component, Input } from '@angular/core';
import { EventEmmiterService } from '../../services/event-emmiter.service';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent {
  @Input() formContent;

  constructor(private eventEmmiterService: EventEmmiterService) {}

  closeEditForm() {
    this.eventEmmiterService.watchEditForm(false);
  }
}
