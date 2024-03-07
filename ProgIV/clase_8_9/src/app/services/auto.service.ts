import { Injectable } from '@angular/core';
import { Auto } from '../nuevo-auto/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private listado: Auto[] = [
    {
      nombre: 'Mi auto',
      modelo: 'Nuevo',
      precio: 1000
    },
    {
      nombre: 'Mi auto 2',
      modelo: 'Nuevo 2',
      precio: 500   
    }
  ];
  constructor() { }

  obtenerAutos(): Auto[]{
    return this.listado;
  }

  guardar(auto: Auto): void{
    this.listado.push(auto);
  }
}
