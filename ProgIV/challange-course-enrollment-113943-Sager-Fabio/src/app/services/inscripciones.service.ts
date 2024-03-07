import { Injectable } from '@angular/core';
import { MateriasService } from './materias-service.service';
import { Inscripcion } from '../classes/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscriptos: Inscripcion[] = [];

  constructor(private materiaService: MateriasService) { }

  obtener(): Inscripcion[]{
    return this.inscriptos.slice();
  }

  inscribir(inscripcion: Inscripcion): void {
    this.materiaService.restarCupo(inscripcion.materia);
    this.inscriptos.push(inscripcion);
  }
}
