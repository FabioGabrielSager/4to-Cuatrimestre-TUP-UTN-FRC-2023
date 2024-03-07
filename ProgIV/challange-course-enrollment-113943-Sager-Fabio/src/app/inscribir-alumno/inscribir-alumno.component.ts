import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../classes/inscripcion';
import { MateriasService } from '../services/materias-service.service';
import { Materia } from '../classes/materia';
import { InscripcionesService } from '../services/inscripciones.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'co-inscribir-alumno',
  templateUrl: './inscribir-alumno.component.html',
  styleUrls: ['./inscribir-alumno.component.css']
})
export class InscribirAlumnoComponent implements OnInit {
  inscripcion: Inscripcion = new Inscripcion();
  materias: Materia[] = [];
 
  constructor(private materiaService: MateriasService, private inscripcionesService: InscripcionesService) { }

  ngOnInit(): void {
    this.materias = this.materiaService.obtener();
  }

  inscribirAlumno(form: NgForm): void {
    if(form.invalid){
      alert("Formulario invalido");
      return;
    }

    try{
      this.inscripcionesService.inscribir(this.inscripcion);
      alert("Alumno inscripto");
    }
    catch(err){
      alert("No se pudo realizar la inscripción. " + err);
    }
  }
}
