import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mascota } from './Mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {
  @Input() mascotas: Mascota[] = [];
}
