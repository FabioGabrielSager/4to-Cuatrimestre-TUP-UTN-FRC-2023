import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mi-auto',
  templateUrl: './mi-auto.component.html',
  styleUrls: ['./mi-auto.component.css']
})
export class MiAutoComponent {
  saludo: string = "Hola";
  nombre: string = "Fabio";
  nombrePieza: string = "";
  mostrar: boolean = false;
  @Input() auto: string = "";

  mostrarAlert(mensaje: string) {
    alert(mensaje)
  }

  actualizarNombre(nuevoNombre: string){
    this.nombrePieza = nuevoNombre;
  }

  actualizarValorNombre($evento: any){
    this.nombrePieza = $evento.target.value;
    console.log(this.nombre);
  }

  agregarPieza(mensaje: string){
    alert("Hijo dice: " + mensaje);
  }

  mostrarElemento(){
    this.mostrar = !this.mostrar;
  }
}