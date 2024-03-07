import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Materia } from '../classes/materia';
import { MateriasService} from '../services/materias-service.service';

@Component({
  selector: 'co-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {

  materia: Materia = new Materia();

  constructor(private MateriaService: MateriasService) { }

  ngOnInit(): void {
  }

  send(fomulario: NgForm) {
    if(fomulario.invalid){
      alert('Formulario invalido');
      return;
    }

    alert("Matería creada!")
    this.MateriaService.guardar(this.materia);
  }
}
