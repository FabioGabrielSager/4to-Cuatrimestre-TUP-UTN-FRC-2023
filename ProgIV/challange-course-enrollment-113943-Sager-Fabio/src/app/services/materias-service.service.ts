import { Injectable } from '@angular/core';
import { Materia } from '../classes/materia';
import { Inscripcion } from '../classes/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  materias: Materia[] = [
    {
      nombre: "Física",
      cupo: 10
    },
    {
      nombre: "Algebra",
      cupo: 1
    }
  ];

  constructor() { }

  guardar(materia: Materia): void{
    this.materias.push(materia);
  }

  obtener(): Materia[]{
    return this.materias;
  }
  
  restarCupo(nombreMateria: string): void {
    const materia = this.materias.find(function(materia){
      return materia.nombre == nombreMateria;
    });

    if(materia != undefined)
    {
      if(materia.cupo > 0){
        materia.cupo--;
      }
      else
        throw Error(`La materia ${nombreMateria} no tiene cupo`);
      
    }
    else
      throw Error(`No se encontro materia con el nombre ${nombreMateria}`);
  }
}
