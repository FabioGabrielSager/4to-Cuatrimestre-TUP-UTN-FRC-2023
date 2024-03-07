import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css']
})
export class ListadoAutosComponent {
  autos: string[] = [
    'ford', 'chevrolet'
  ]

  agregar() {
    this.autos.push('Renault')
  }
}
