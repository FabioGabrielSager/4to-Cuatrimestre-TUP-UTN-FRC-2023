import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../classes/inscripcion';
import { MateriasService } from '../services/materias-service.service';
import { InscripcionesService } from '../services/inscripciones.service';

@Component({
  selector: 'co-listar-inscripciones',
  templateUrl: './listar-inscripciones.component.html',
  styleUrls: ['./listar-inscripciones.component.css']
})
export class ListarInscripcionesComponent implements OnInit {

  inscripciones: Inscripcion[] = [];
  
  constructor(private inscripcionesService: InscripcionesService) { }

  ngOnInit(): void {
    this.inscripciones = this.inscripcionesService.obtener();
  }
}
