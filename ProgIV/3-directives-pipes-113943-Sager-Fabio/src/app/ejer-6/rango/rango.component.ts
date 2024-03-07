import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rango',
  templateUrl: './rango.component.html',
  styleUrls: ['./rango.component.css']
})
export class RangoComponent {

  @Output() onInputChange = new EventEmitter();

  sendOpacity($event: any) {
    this.onInputChange.emit($event.target.value);
  }
}
