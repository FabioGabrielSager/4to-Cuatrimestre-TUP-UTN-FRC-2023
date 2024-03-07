import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {
  @Input() title: string = "";
  @Input() color: string = 'red';
  @Input() fontSize: string = '12px';
}
