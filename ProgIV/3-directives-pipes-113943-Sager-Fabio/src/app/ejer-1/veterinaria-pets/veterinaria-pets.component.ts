import { Component } from '@angular/core';
import { Mascota } from 'src/app/mascota/Mascota';
import { AgePipe } from 'src/app/age.pipe'

@Component({
  selector: 'app-veterinaria-pets',
  templateUrl: './veterinaria-pets.component.html',
  styleUrls: ['./veterinaria-pets.component.css']
})
export class VeterinariaPetsComponent {
  mostrar: boolean = false;
  mascotas: Mascota[] = [
    new Mascota('Maxwell', 'Persa', 'M', 2010, 'Fabio', true),
    new Mascota('Maxwell', 'Persa', 'M', 2010, 'Fabio', true),
    new Mascota('Maxwell', 'Persa', 'M', 2010, 'Fabio', true)
  ];
}
