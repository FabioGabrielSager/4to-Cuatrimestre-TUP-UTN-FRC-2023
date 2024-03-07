import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mascota } from '../../Classes/Mascota';
import {PetsService} from "../../services/pets.service";

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit{
  mascotas: Mascota[] = [];

  constructor(private petService: PetsService) {
  }

  ngOnInit(): void {
    this.mascotas = this.petService.getPets();
  }
}
