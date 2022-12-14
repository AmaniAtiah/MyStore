import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  @Output() checkoutSuccess:EventEmitter<string> = new EventEmitter();

  constructor() {}
  firstName: string='';
  address: string = '';
  creditCard: string | number = '';
  
  submitForm(): void {
    this.checkoutSuccess.emit(this.firstName);

  }


}
