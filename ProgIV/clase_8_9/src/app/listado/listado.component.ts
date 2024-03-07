import { Component, OnInit } from '@angular/core';
import { Auto } from '../nuevo-auto/auto';
import { AutoService } from '../services/auto.service';
import { CalcularImporteService } from '../services/calcular-importe.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listado: Auto[] = [];

  constructor(private service: AutoService, private calculador: CalcularImporteService){

  }
  
  ngOnInit(): void {
    this.listado = this.service.obtenerAutos();
  }

  calcularImporte(precio: number): void {
    const importe = this.calculador.calcularImporte(precio);
    alert('Importe: ' + importe)
  }
}
