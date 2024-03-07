import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent {
  @Input() v1: number = 0;
  @Input() v2: number = 0;
  resultado: number = 0;
  @Output() onLimpiar = new EventEmitter();
  @Output() onCalcular = new EventEmitter();

  calcular($event: any) : void {
    switch($event.target.name){
      case "sumar": {
        this.resultado =  Number(this.v1) + Number(this.v2);
        break;
      }
      case "restar": { 
        this.resultado = this.v1 - this.v2;
        break;
      }
      case "multiplicar": {
        this.resultado = this.v1 * this.v2;
        break;
      }
      case "dividir": {
        this.resultado = this.v1 / this.v2;
        break;
      }
      case "elevar": {
        this.resultado = this.v1 ** this.v2;
        break;
      }
    }
    this.onCalcular.emit(this.resultado);
  }
}
