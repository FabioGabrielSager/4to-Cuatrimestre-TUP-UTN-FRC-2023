import { Component } from '@angular/core';
import { Mascota } from 'src/app/Classes/Mascota';
import { AgePipe } from 'src/app/Pipes/age.pipe'

@Component({
  selector: 'app-veterinaria-pets',
  templateUrl: './veterinaria-pets.component.html',
  styleUrls: ['./veterinaria-pets.component.css']
})
export class VeterinariaPetsComponent {
  mostrar: boolean = true;
}
