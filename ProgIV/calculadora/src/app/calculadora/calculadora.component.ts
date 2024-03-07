import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  v1: number = 0;
  v2: number = 0;

  actualizarValor($event: any): void {
    if($event.target.name == "v1in"){
      this.v1 = $event.target.value;
    }
    else {
      this.v2 = $event.target.value;
    }
  }

  limpiarDisplay() {
    const display = document.getElementById("display");
    if(display != null)
    {
      display.innerText = "";
      this.v1 = this.v2 = 0;
    }
  }

  mostrarResultado($event: any) {
    const display = document.getElementById("display");
    if(display != null){
      display.innerText = "";
      display.innerText = $event;
    }
  }   
}
