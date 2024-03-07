import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pieza',
  templateUrl: './pieza.component.html',
  styleUrls: ['./pieza.component.css']
})
export class PiezaComponent {
  // El decorador @Input permite que la propiedad sea accesible desde un componente padre.
  @Input() nombre: string = '';
  @Output() onAgregarPieza = new EventEmitter();

  agregarPieza(){
    this.onAgregarPieza.emit('Hola padre');    
  }
}
